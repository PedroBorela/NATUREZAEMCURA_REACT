# Plano de Otimização — Natureza em Cura

**Data:** 2026-05-14  
**Projeto:** Landing page React (Vite + Tailwind)  
**Diagnóstico:** Landing page com animações ricas e assets pesados

---

## Diagnóstico Geral

| Métrica | Situação Atual | Meta |
|---|---|---|
| Assets de imagem | **118 MB** (74 MB em JPG) | < 10 MB |
| Delay de loading | **2.5s fixo** | 0–0.8s |
| Font Awesome | CDN externo (round-trip) | Removido |
| Code splitting | Nenhum configurado | Por seção |
| Compressão de build | Nenhuma | Brotli + Gzip |
| Libraries duplicadas | react-icons + tabler/icons | Apenas uma |

---

## Prioridades

```
CRÍTICO  → impacto direto em LCP / CLS / FID
ALTO     → melhoria significativa de TTI e bundle size
MÉDIO    → otimização de DX e manutenção
BAIXO    → refinamentos e qualidade de código
```

---

## 1. Imagens [CRÍTICO]

**Problema:** 118 MB de assets. JPGs chegam a 8.4 MB por arquivo. As imagens são o maior gargalo de carregamento do site.

### 1.1 Converter JPGs para WebP + AVIF

Converter todos os arquivos em `public/imgs/` de JPG/PNG para WebP e, onde possível, AVIF.

**Arquivos críticos (por tamanho):**
- `rodacura.jpg` — 8.4 MB → meta: < 300 KB em WebP
- `cerimoniaXa.jpg` — 7.2 MB → meta: < 250 KB
- `allanb.jpg` — 7.0 MB → meta: < 300 KB
- `fundodesfoc.jpg` — 6.2 MB → meta: < 200 KB
- `aulanoestudio.jpg` — 6.6 MB → meta: < 300 KB
- `cerimoniaespiritual.jpg` — 5.6 MB → meta: < 250 KB
- `floral.png` — 2.6 MB → meta: SVG ou < 100 KB WebP
- `mandala.png` — 1.6 MB → meta: SVG ou < 80 KB WebP
- `yogafundo.png` — 4.1 MB → meta: < 200 KB WebP

**Comando (local, com ImageMagick ou cwebp):**
```bash
# Exemplo para converter em lote com qualidade 80
for f in public/imgs/*.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
for f in public/imgs/*.png; do cwebp -q 80 "$f" -o "${f%.png}.webp"; done
```

**Ou usar ferramenta online:** Squoosh (squoosh.app) para os arquivos maiores.

### 1.2 Usar `<picture>` com srcset nas imagens pesadas

Nas seções que usam imagens grandes (Hero, Carousel, Timeline), substituir `<img>` por `<picture>`:

```jsx
<picture>
  <source srcSet="/imgs/rodacura.avif" type="image/avif" />
  <source srcSet="/imgs/rodacura.webp" type="image/webp" />
  <img src="/imgs/rodacura.jpg" alt="Roda de Cura" loading="lazy" decoding="async" />
</picture>
```

### 1.3 Adicionar `loading="lazy"` e `decoding="async"`

Verificar todos os `<img>` no projeto — garantir que imagens fora da viewport inicial tenham:
```jsx
loading="lazy" decoding="async"
```

A imagem hero (`yogaARlivre.webp`) já tem `fetchPriority="high"` no `index.html` — manter assim.

### 1.4 Redimensionar imagens para o tamanho de exibição

As imagens de timeline (`tl1.jpg` a `tl12.jpg`) são exibidas como miniaturas. Redimensionar para `800×600px` máximo antes de converter para WebP.

---

## 2. Build e Bundling [CRÍTICO]

**Problema:** Vite sem configuração de otimização — nenhum code splitting, sem compressão, sem separação de chunks.

### 2.1 Configurar `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion', 'motion'],
          'vendor-gsap': ['gsap'],
          'vendor-icons': ['react-icons'],
          'vendor-dates': ['date-fns'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
```

**Instalar plugin de compressão:**
```bash
npm install -D vite-plugin-compression
```

### 2.2 Dynamic imports nas seções pesadas

Converter as seções abaixo para `React.lazy()` no `App.jsx`:

```jsx
// Seções visíveis apenas com scroll — não precisam estar no bundle inicial
const Calendario = lazy(() => import('./sections/Calendario/Calendario'))
const Cards = lazy(() => import('./sections/Cards/Cards'))
const Testimonial = lazy(() => import('./components/Testimonial/Testimonial'))
const TimelineDemo = lazy(() => import('./components/TimelineDemo/TimelineDemo'))
const Numeros = lazy(() => import('./sections/Numeros/Numeros'))
```

Envolver com Suspense por seção:
```jsx
<Suspense fallback={<div className="h-96 animate-pulse bg-neutral-900" />}>
  <Calendario />
</Suspense>
```

---

## 3. Loading Screen [ALTO]

**Problema:** Delay fixo de 2.5 segundos independente do carregamento real.

**Arquivo:** [src/components/LoadingScreen.jsx](src/components/LoadingScreen.jsx)

### Solução

Substituir o timer fixo por um listener no evento `load` da janela:

```jsx
useEffect(() => {
  const handleLoad = () => {
    // Delay mínimo de 600ms para evitar flash + aguarda o load real
    setTimeout(() => setVisible(false), 600)
  }

  if (document.readyState === 'complete') {
    handleLoad()
  } else {
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }
}, [])
```

Se quiser manter uma experiência de marca, usar 800ms como mínimo (não 2500ms).

---

## 4. Font Awesome CDN [ALTO]

**Problema:** `index.html` carrega Font Awesome 6.4.0 via CDN — round-trip externo, bloqueio de render, sem tree-shaking.

**Arquivo:** [index.html](index.html)

```html
<!-- REMOVER esta linha -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
```

### Substituição

Verificar quais ícones Font Awesome estão em uso e substituir pelos equivalentes de `react-icons/fa`:

```jsx
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
```

O projeto já usa `react-icons` — a substituição é simples e elimina o CDN.

---

## 5. GSAP — Carregamento Condicional [ALTO]

**Problema:** Mesmo com lazy loading no CTA, outros componentes (`Hero`, `Cards`) importam GSAP diretamente no topo, adicionando ~500 KB ao bundle inicial.

**Arquivos:** `sections/Hero/Hero.jsx`, `sections/Cards/Cards.jsx`

### Solução

Converter as importações estáticas de GSAP para dinâmicas com IntersectionObserver (mesmo padrão já usado no CTA):

```jsx
// Antes (no topo do arquivo)
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Depois (dentro do useEffect)
useEffect(() => {
  const observer = new IntersectionObserver(async ([entry]) => {
    if (!entry.isIntersecting) return
    observer.disconnect()
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    // ... restante da lógica de animação
  }, { threshold: 0.1 })

  observer.observe(sectionRef.current)
  return () => observer.disconnect()
}, [])
```

---

## 6. Consolidar Bibliotecas de Ícones [MÉDIO]

**Problema:** O projeto usa `react-icons` e `@tabler/icons-react` — dois pacotes de ícones diferentes, dobrando o custo de tree-shaking e manutenção.

### Solução

Verificar quais ícones de `@tabler/icons-react` estão em uso:
```bash
grep -r "tabler" src/ --include="*.jsx" --include="*.js"
```

Se forem poucos, substituir pelos equivalentes de `react-icons/tb` (Tabler Icons também estão disponíveis lá) e remover `@tabler/icons-react`:

```bash
npm uninstall @tabler/icons-react
```

---

## 7. Verificar OGL [MÉDIO]

**Problema:** `ogl` (~100 KB) está nas dependências mas pode não estar em uso ativo.

```bash
grep -r "ogl" src/ --include="*.jsx" --include="*.js"
```

Se não houver resultados, remover:
```bash
npm uninstall ogl
```

---

## 8. Fontes Google [MÉDIO]

**Problema:** Fontes carregadas via `@import` no CSS — bloqueia render e depende de DNS externo.

**Arquivo:** [src/index.css](src/index.css)

### Solução

Mover o `@import` de fontes para o `<head>` do `index.html` com `rel="preconnect"` e `rel="preload"`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style"
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" />
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
  media="print" onload="this.media='all'" />
```

Ou, idealmente, hospedar as fontes localmente em `public/fonts/` para eliminar a dependência de rede.

---

## 9. Scroll Behavior e CSS Geral [MÉDIO]

### 9.1 `will-change` nos elementos animados

Para elementos com animações GSAP frequentes, adicionar `will-change: transform` via Tailwind ou CSS inline para promover compositing na GPU:

```css
.animated-section {
  will-change: transform;
}
```

Usar com moderação — apenas em elementos realmente animados e remover após a animação com `will-change: auto`.

### 9.2 Remover CSS não utilizado

Tailwind já faz purge por padrão com o `content` configurado. Verificar se o `tailwind.config.js` cobre todos os arquivos:

```js
content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
```

---

## 10. Meta tags e SEO [BAIXO]

**Arquivo:** [index.html](index.html)

Adicionar meta tags essenciais que faltam:

```html
<meta name="description" content="Natureza em Cura — Yoga, Reiki, Cerimônias e muito mais." />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta property="og:title" content="Natureza em Cura" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/imgs/logo.webp" />
<meta property="og:type" content="website" />
<link rel="canonical" href="https://seudominio.com.br" />
```

---

## Ordem de Execução Recomendada

| # | Tarefa | Impacto | Esforço | Prioridade |
|---|---|---|---|---|
| 1 | Comprimir + converter imagens para WebP | LCP, transferência | Médio | **CRÍTICO** |
| 2 | Remover Font Awesome CDN | FCP, round-trip | Baixo | **CRÍTICO** |
| 3 | Otimizar LoadingScreen (remover delay fixo) | FCP, UX | Baixo | **ALTO** |
| 4 | Configurar Vite: code splitting + compressão | Bundle size, TTI | Médio | **ALTO** |
| 5 | Dynamic imports nas seções abaixo do fold | TTI | Médio | **ALTO** |
| 6 | GSAP lazy em Hero e Cards | Bundle inicial | Médio | **ALTO** |
| 7 | Consolidar react-icons + tabler | Bundle size | Baixo | **MÉDIO** |
| 8 | Remover OGL se não usado | Bundle size | Muito baixo | **MÉDIO** |
| 9 | Mover fontes Google para preload | FCP | Baixo | **MÉDIO** |
| 10 | `<picture>` com srcset nas imagens pesadas | LCP, bandwidth | Médio | **MÉDIO** |
| 11 | `will-change` nos elementos animados | Smoothness | Baixo | **BAIXO** |
| 12 | Meta tags SEO | SEO | Muito baixo | **BAIXO** |

---

## Resultado Esperado

Após implementação completa:

| Métrica | Antes | Depois (estimado) |
|---|---|---|
| Assets transferidos (inicial) | ~5–10 MB | < 1.5 MB |
| Assets totais (imagens) | 118 MB | < 10 MB |
| Tempo de loading screen | 2.5s | 0.6–0.8s |
| Bundle JS inicial | ~1.2 MB | < 400 KB |
| LCP (Largest Contentful Paint) | > 4s | < 2.5s |
| Requests externos | 2 (FA + Google Fonts) | 0–1 |

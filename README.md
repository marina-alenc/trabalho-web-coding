# FELIS PET – Banho e Tosa

Site responsivo de um petshop (HTML5 + CSS3) – Trabalho Final de Web Coding.

## Páginas
`index.html` · `html/servicos.html` · `html/cadastro-pet.html` · `html/agendamento.html` · `html/veterinario.html`

## Estrutura
```
index.html   html/   css/style.css   images/
```

## Onde foi aplicado
**Flexbox** (`display:flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`): `.cabecalho` e `.menu__lista`, `.hero`, `.equipe` (lista de veterinários), `.formulario__linha`, `.rodape`.

**Grid**: `.grade` (6 cartões, `repeat(auto-fit, minmax(16rem, 1fr))`, usada em Serviços e Veterinário) e `.painel` (`grid-template-areas`, na home).

**Media Queries** (`@media screen`): `min-width:769px` (desktop), `max-width:768px` (tablet) e `max-width:480px` (smartphone). Alteram menu, hero, `.painel`, `.grade`, rodapé, botões e espaçamentos.

**BEM**: blocos `cabecalho`, `menu`, `hero`, `card`, `grade`, `painel`, `equipe`, `formulario`, `rodape`, `botao`; elementos como `card__titulo`; modificadores como `card--destaque`, `botao--destaque`, `menu__link--ativo`.

**Estados**: `:hover` em links, botões, cartões e campos; `:focus-visible` global.

## Capturas de tela

### Desktop

![Versão desktop - home](capturas/captura1.jpg)

![Versão desktop - página de agendamento](capturas/captura2.jpg)

### Tablet (768px)

![Versão tablet - home](capturas/captura3.jpg)

![Versão tablet - página de agendamento](capturas/captura4.jpg)

### Smartphone (360px)

![Versão smartphone - home](capturas/captura5.jpg)

![Versão smartphone - página de agendamento](capturas/captura6.jpg)

## Contato fictício
(86) 80028922 - contato@felispet.com.br

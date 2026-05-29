/* ==========================================================================
   WF IMPORTS — BENTO-BOX INTERACTIVE ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // ===== PRODUCT DATABASE =====
  const PRODUCTS = [
    {
      id: 'ws79-ultra2',
      title: 'WS 79 ULTRA 2 (49mm)',
      category: 'watch',
      desc: 'Modelo de 49mm com incrível kit de 3 pulseiras (Ocean, Milanese e Couro). Tela super brilhante de 2.2" de cores vivas e acabamento premium com parafusos reais. Faz e recebe ligações, exibe notificações, monitora atividades físicas (modos esporte) e sono, possui controle remoto de câmera e música, assistente de voz, senha de bloqueio e trava física de pulseira.',
      price: 100.00,
      badge: 'Destaque Imperial',
      image: 'ws79_ultra2.png',
      features: ['49mm', '3 Pulseiras', 'Ligações', 'IP68'],
      variants: [
        { name: 'Ocean Orange', color: '#FF6B35' },
        { name: 'Milanese Silver', color: '#C0C0C0' },
        { name: 'Couro Marrom', color: '#8B4513' }
      ]
    },
    {
      id: 'n10-smartwatch',
      title: 'N10 Smartwatch Slim',
      category: 'watch',
      desc: 'Design slim e acabamento premium que tornam o N10 não apenas funcional, mas um acessório de moda indispensável. Experiência visual de alta qualidade com ilha dinâmica. Faz e recebe ligações, jogos integrados, modos esporte, calendário, previsão do tempo, alarme, calculadora, controle de música, ciclo feminino e modo saúde.',
      price: 90.00,
      badge: 'Design Slim',
      image: 'n10_smartwatch.jpg',
      features: ['Slim', 'Ilha Dinâmica', 'Ligações', 'Jogos'],
      variants: [
        { name: 'Azul Navy', color: '#1B3A5C' },
        { name: 'Preto', color: '#111111' }
      ]
    },
    {
      id: 'ultra-47mm-premium',
      title: 'Smartwatch Ultra 47mm Premium',
      category: 'watch',
      desc: 'Custo-benefício insuperável com o design do último lançamento. Com tamanho de 47mm, acabamento super premium e kit de 3 pulseiras para combinar com qualquer estilo. Oferece comandos de voz, localização em tempo real, faz e recebe ligações, atendimento prático por gestos, previsão do tempo, jogos, ilha dinâmica, calendário, calculadora, ciclo feminino e modo saúde completo (temperatura corporal, ECG, oxímetro, monitor cardíaco, pressão arterial e sono). Equipado com processador Dual Core de alta performance.',
      price: 130.00,
      badge: 'Super Custo-Benefício',
      image: 'ultra_47mm.jpg',
      features: ['47mm', 'Dual Core', '3 Pulseiras', 'ECG'],
      variants: [
        { name: 'Azul Claro', color: '#87CEEB' },
        { name: 'Branco', color: '#F5F5F5' },
        { name: 'Preto', color: '#111' }
      ]
    },
    {
      id: 's10-microwear',
      title: 'S10 Microwear Série 10',
      category: 'watch',
      desc: 'O Novo S10 da Microwear é surpreendente! Conta com um design mais fino, tela curva com alta resolução e watch faces dinâmicas atualizadas. Todo o sistema da série 10 foi recentemente lançado com novas funções como: Medidor de decibéis, tradutor de idiomas, ChatGPT em português, e muito mais funções de saúde para agregar no seu dia a dia.',
      price: 170.00,
      badge: 'Lançamento Série 10',
      image: 's10_microwear.jpg',
      features: ['Tela Curva HD', 'ChatGPT PT-BR', 'Tradutor', 'Decibéis'],
      variants: [
        { name: 'Preto', color: '#111111' },
        { name: 'Prata', color: '#C0C0C0' }
      ]
    },
    {
      id: 's10-pro',
      title: 'S10 PRO Microwear',
      category: 'watch',
      desc: 'O Novo S10 PRO da Microwear é surpreendente! Conta com um design mais fino, tela curva com alta resolução e watch faces dinâmicas. Esse modelo conta com 1GB de memória interna para armazenamento de músicas e fotos, podendo conectar ao fone de ouvido tornando assim uma experiência única. Contando com novas funções como: Medidor de decibéis, tradutor de idiomas, ChatGPT em português, e muito mais funções de saúde para agregar no seu dia.',
      price: 190.00,
      badge: '1GB Memória Interna',
      image: 's10_pro.jpg',
      features: ['1GB Memória Interna', 'Conexão c/ Fone', 'Tela Curva HD', 'ChatGPT PT-BR'],
      variants: [
        { name: 'Preto', color: '#111111' },
      ]
    },
    {
      id: 's11-microwear',
      title: 'S11 Série 11 Microwear',
      category: 'watch',
      desc: 'A nova linha Série 11 da Microwear traz inovações de peso: ChatGPT integrado, GPS pareado com o celular e a praticidade de responder ao WhatsApp diretamente do pulso. Além disso, faz e recebe ligações, recebe notificações diversas e exibe a previsão do clima de forma rápida e intuitiva.',
      price: 250.00,
      badge: 'Lançamento Série 11',
      image: 's11_microwear.jpg',
      features: ['Responde WhatsApp', 'ChatGPT', 'GPS Pareado', 'Clima'],
      variants: [
        { name: 'Padrão', color: '#111111' }
      ]
    },
    {
      id: 's11-pro',
      title: 'S11 Pro Microwear',
      category: 'watch',
      desc: 'Um salto na nova linha Séries 11 da Microwear. O modelo S11 Pro apresenta incrível tela AMOLED e acabamento premium 47mm. É um verdadeiro computador de pulso: vem equipado com ChatGPT, GPS pareado com o celular, 2GB de memória interna e permite respostas detalhadas direto no WhatsApp.',
      price: 199.00,
      badge: 'Tela AMOLED 2GB',
      image: 's11_pro.jpg',
      features: ['Tela AMOLED', '2GB Memória Interna', 'Responde WhatsApp', 'ChatGPT', 'GPS Pareado'],
      variants: [
        { name: 'Preto', color: '#111111' },
      ]
    },
    {
      id: 's11-mini',
      title: 'S11 Mini Smartwatch',
      category: 'watch',
      desc: 'O S11 Mini Smartwatch é um relógio inteligente moderno, compacto e confortável, ideal para quem prefere um smartwatch menor e mais leve no pulso, sem abrir mão de tecnologia e das funcionalidades da linha premium Microwear.',
      price: 210.00,
      badge: 'Compacto & Leve',
      image: 's11_mini.jpg',
      features: ['Design Compacto', 'Leve e Confortável', 'Tecnologia Série 11', 'Multi-esportes'],
      variants: [
        { name: 'Branco', color: '#F5F5F5' },
        { name: 'Preto', color: '#111111' },
      ]
    },
    {
      id: 'w11-mini',
      title: 'W11 Mini Smartwatch',
      category: 'watch',
      desc: 'O W11 Mini vai conquistar você com o equilíbrio perfeito entre tecnologia e design compacto. Pertencente à nova linha Séries 11 da Microwear, o W11 Mini combina funções inteligentes, desempenho fluido e tela IPS HD de 1.85”, entregando tudo o que um smartwatch moderno precisa ter — e muito mais.',
      price: 210.00,
      badge: 'Tela IPS HD 1.85"',
      image: 'w11_mini.jpg',
      features: ['Tela IPS HD 1.85"', 'Design Compacto', 'Desempenho Fluido', 'Série 11'],
      variants: [
        { name: 'Preto', color: '#111111' },
      ]
    },
    {
      id: 'w11-pro-mini',
      title: 'W11 Pro MINI',
      category: 'watch',
      desc: 'O W11 Pro MINI é um dos mais novos lançamentos da Microwear que traz, com seus 42mm, recursos premium para o seu dia a dia. Entre suas principais funções constam ChatGPT, 1GB de memória interna, função para responder WhatsApp e uma incrível tela AMOLED.',
      price: 250.00,
      badge: '42mm Premium',
      image: 'w11_pro_mini.jpg',
      features: ['Tela AMOLED', '1GB Memória Interna', 'ChatGPT', 'Responde WhatsApp'],
      variants: [
        { name: 'Branco', color: '#F5F5F5' },
        { name: 'Preto', color: '#111111' },
      ]
    },
    {
      id: 'w11x',
      title: 'W11X Microwear',
      category: 'watch',
      desc: 'O W11X é o mais novo lançamento da Microwear que traz recursos premium para seu dia a dia. Entre suas principais funções constam ChatGPT, 1GB de memória interna e respostas ao WhatsApp.',
      price: 199.00,
      badge: 'Lançamento Premium',
      image: 'w11x.jpg',
      features: ['1GB Memória Interna', 'ChatGPT', 'Responde WhatsApp', 'Recursos Premium'],
      variants: [
        { name: 'Branco', color: '#F5F5F5' },
        { name: 'Preto', color: '#111111' },
      ]
    },
    {
      id: 'gt5-mini-max',
      title: 'GT5 MINI Max',
      category: 'watch',
      desc: 'Com seu design arredondado e clássico, o GT5 MINI Max traz a simbiose perfeita entre robustez e tecnologia para o seu dia a dia. Entre suas principais funções ele possui ChatGPT integrado, GPS pareado com o celular, tela nítida e muito mais.',
      price: 199.00,
      badge: 'Design Arredondado',
      image: 'gt5_mini.jpg',
      features: ['Design Arredondado', 'ChatGPT Integrado', 'GPS Pareado', 'Tela Clássica'],
      variants: [
        { name: 'Branco', color: '#F5F5F5' },
        { name: 'Preto', color: '#111111' },
      ]
    },

  ];

  // ===== STATE =====
  let cart = [];
  let modalProductQty = 1;

  // ===== UTILS =====
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const formatPrice = (v) => `R$ ${v.toFixed(2).replace('.', ',')}`;

  function showToast(msg, icon = 'check-circle') {
    const container = $('#toast-container');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i data-lucide="${icon}"></i><span>${msg}</span>`;
    container.appendChild(t);
    lucide.createIcons({ nodes: [t] });
    setTimeout(() => t.remove(), 3000);
  }

  // ===== CURSOR GLOW =====
  const cursorGlow = $('#cursor-glow');
  if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  }

  // ===== NAVBAR =====
  const navbar = $('#navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    navbar.classList.toggle('scrolled', sy > 50);
    lastScroll = sy;
  });

  // Active nav link
  const sections = $$('section[id]');
  const navLinks = $$('.nav__link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('data-sec') === current);
    });
  });

  // Mobile menu
  const mobileMenu = $('#mobile-menu');
  const mobileToggle = $('#mobile-toggle');
  const mobileClose = $('#mobile-close');

  mobileToggle?.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));

  $$('.mobile-drawer__link').forEach(l => {
    l.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // Elementos do hero video apenas têm animação via css (vidFadeUp) no load.
  // Vamos configurar o ScrollTrigger para expandir o video!

  // ===== BENTO GRID VIDEO AUTOPLAY ON HOVER =====
  $$('.bento__card[data-watch]').forEach(card => {
    const video = card.querySelector('.bento__card-video');
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }

    // Click to open product modal
    const btnDetail = card.querySelector('.bento__card-btn');
    if (btnDetail) {
      btnDetail.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btnDetail.dataset.product;
        const product = PRODUCTS.find(p => p.id === pid);
        if (product) openProductModal(product);
      });
    }

    card.addEventListener('click', () => {
      const watchId = card.dataset.watch;
      const product = PRODUCTS.find(p => p.id === watchId);
      if (product) openProductModal(product);
    });
  });

  // ===== SHOWCASE: HORIZONTAL SCROLL + GSAP PIN =====
  const showcaseOuter = $('#showcase-outer');
  const showcaseTrack = $('#showcase-track');
  const showcasePanels = $$('.showcase__panel');
  const showcaseDots = $$('.showcase__dot');
  const showcaseProgress = $('#showcase-progress');
  const PANEL_COUNT = showcasePanels.length;

  if (typeof gsap !== 'undefined' && showcaseTrack) {
    gsap.registerPlugin(ScrollTrigger);

    // 1. HORIZONTAL SCROLL SHOWCASE (Desktop Only)
    let mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      const totalScrollWidth = showcaseTrack.scrollWidth - window.innerWidth;

      const showcaseTween = gsap.to(showcaseTrack, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: showcaseOuter,
          start: 'top top',
          end: () => `+=${totalScrollWidth + window.innerHeight}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const activeIndex = Math.round(progress * (PANEL_COUNT - 1));

            showcaseDots.forEach((dot, i) => {
              dot.classList.toggle('active', i === activeIndex);
            });

            if (showcaseProgress) {
              showcaseProgress.style.width = `${(progress * 100).toFixed(1)}%`;
            }

            showcasePanels.forEach((panel, i) => {
              const vid = panel.querySelector('.showcase__panel-vid');
              if (!vid) return;
              if (i === activeIndex) {
                vid.play().catch(() => {});
              } else {
                vid.pause();
                vid.currentTime = 0;
              }
            });
          }
        }
      });

      showcasePanels.forEach((panel) => {
        const img = panel.querySelector('.showcase__panel-img');
        if (!img) return;
        gsap.fromTo(img,
          { x: 40 },
          {
            x: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: showcaseTween,
              start: 'left right',
              end: 'right left',
              scrub: true
            }
          }
        );
      });

      showcasePanels.forEach((panel) => {
        const info = panel.querySelector('.showcase__panel-info');
        if (!info) return;
        gsap.fromTo(info,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: showcaseTween,
              start: 'left center',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      showcaseDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          const targetProgress = i / (PANEL_COUNT - 1);
          const st = showcaseTween.scrollTrigger;
          const targetScroll = st.start + (st.end - st.start) * targetProgress;
          gsap.to(window, { scrollTo: targetScroll, duration: 1.2, ease: 'power3.inOut' });
        });
      });
      
      return () => {
         // optional cleanup if we resize back and forth
         gsap.set(showcaseTrack, {clearProps: "all"});
      };
    }); // End desktop matchMedia

    // 2. HORIZONTAL SCROLL SHOWCASE (Mobile Swipe Snap Sync)
    mm.add("(max-width: 768px)", () => {
      const updateDots = () => {
        const scrollLeft = showcaseTrack.scrollLeft;
        // Panel width + 16px gap
        const panelWidth = showcasePanels[0].offsetWidth + 16;
        if(panelWidth <= 0) return;
        const activeIndex = Math.round(scrollLeft / panelWidth);
        
        showcaseDots.forEach((dot, i) => {
          dot.classList.toggle('active', i === activeIndex);
        });
      };

      showcaseTrack.addEventListener('scroll', updateDots, { passive: true });

      const clickHandlers = [];
      showcaseDots.forEach((dot, i) => {
        const handler = () => {
          const panelWidth = showcasePanels[0].offsetWidth + 16;
          showcaseTrack.scrollTo({
            left: i * panelWidth,
            behavior: 'smooth'
          });
        };
        dot.addEventListener('click', handler);
        clickHandlers.push({ dot, handler });
      });

      // Initial visual sync
      updateDots();

      return () => {
        showcaseTrack.removeEventListener('scroll', updateDots);
        clickHandlers.forEach(item => item.dot.removeEventListener('click', item.handler));
      };
    }); // End mobile matchMedia

    // 5. Cinematic Video Hero Scroll Expansion
    const heroStage = document.getElementById('hero-video-section');
    if (heroStage) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroStage,
          start: "top top",
          end: "+=150%", // Scroll depth for the animation
          scrub: 1.5,
          pin: true,
          anticipatePin: 1
        }
      });

      // Expand container to full screen
      tl.to('.hero-vid__container', {
        width: '100%', // fixed from 100vw to avoid scrollbar
        height: '100vh',
        borderRadius: 0,
        boxShadow: '0 0 0 rgba(0,0,0,0)',
        ease: "power2.inOut"
      }, 0);

      // Fade out and translate the texts
      tl.to('.hero-vid__content', {
        y: -100,
        opacity: 0,
        scale: 0.9,
        ease: "power2.inOut"
      }, 0);

      // Fade out scroll hint early
      tl.to('.hero__scroll-hint', {
        opacity: 0,
        y: 20,
        ease: "power1.inOut",
        duration: 0.3
      }, 0);
    }

    // 6. Features Cards Reveal
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: '.features__grid',
        start: 'top 85%'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // 7. Simulator Sticky Effect (desktop only)
    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': function() {
        gsap.to('.simulator__preview', {
          scrollTrigger: {
            trigger: '.simulator__studio',
            start: 'top 120px',
            end: 'bottom bottom',
            pin: '.simulator__preview',
            pinSpacing: false
          }
        });
      }
    });

    // 8. Store Reveal
    gsap.from('.store__header', {
      scrollTrigger: {
        trigger: '.store',
        start: 'top 80%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  // ===== SHOWCASE: PANEL BUTTON EVENTS =====
  $$('.showcase__panel-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.product);
    });
  });

  $$('.showcase__panel-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = PRODUCTS.find(p => p.id === btn.dataset.product);
      if (product) openProductModal(product);
    });
  });

  // ===== SIMULATOR CONTROLS =====
  // Face style
  $$('#face-style-selector .sim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#face-style-selector .sim-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Hand style
  $$('#hand-style-selector .sim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#hand-style-selector .sim-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Complications (max 2)
  $$('#complications-selector .sim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      } else {
        const activeCount = $$('#complications-selector .sim-btn.active').length;
        if (activeCount < 2) btn.classList.add('active');
        else showToast('Máximo de 2 widgets!', 'alert-circle');
      }
    });
  });

  // Case material
  $$('#case-material-selector .sim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#case-material-selector .sim-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Apply button
  $('#apply-face-btn')?.addEventListener('click', () => {
    showToast('Watchface sincronizada com sucesso!', 'check-circle');
  });

  // ===== STORE: RENDER PRODUCTS =====
  const productsContainer = $('#products-container');

  function renderProducts(filter = 'all') {
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
    productsContainer.innerHTML = '';

    filtered.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.category = p.category;
      card.style.animationDelay = `${i * 0.05}s`;

      const imageContent = p.image
        ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
        : (p.svg || '');

      card.innerHTML = `
        <div class="product-card__image">
          <span class="product-card__badge">${p.badge}</span>
          ${imageContent}
        </div>
        <div class="product-card__info">
          <h3 class="product-card__title">${p.title}</h3>
          <p class="product-card__desc">${p.desc}</p>
          <div class="product-card__footer">
            <span class="product-card__price">${formatPrice(p.price)}</span>
            <button class="product-card__add-btn" data-add-id="${p.id}" aria-label="Adicionar ao carrinho">
              <i data-lucide="plus"></i>
            </button>
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.product-card__add-btn')) return;
        openProductModal(p);
      });

      productsContainer.appendChild(card);
    });

    lucide.createIcons({ nodes: [productsContainer] });

    // Add to cart buttons
    $$('.product-card__add-btn', productsContainer).forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(btn.dataset.addId);
      });
    });
  }

  renderProducts();

  // Filters
  $$('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });

  // ===== CART SYSTEM =====
  const cartOverlay = $('#cart-overlay');
  const cartDrawer = $('#cart-drawer');
  const cartEmpty = $('#cart-empty');
  const cartActive = $('#cart-active');
  const cartItemsContainer = $('#cart-items-container');
  const cartBadge = $('#cart-badge-count');
  const cartTotal = $('#cart-total-value');

  function openCart() {
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
  }

  function closeCart() {
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
  }

  $('#open-cart-btn')?.addEventListener('click', openCart);
  $('#close-cart-btn')?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);
  $('#cart-continue-shopping')?.addEventListener('click', closeCart);

  function addToCart(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(c => c.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }

    updateCartUI();
    showToast(`${product.title} adicionado!`, 'shopping-bag');
    cartBadge.classList.add('bump');
    setTimeout(() => cartBadge.classList.remove('bump'), 400);
    openCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter(c => c.id !== productId);
    updateCartUI();
  }

  function changeQty(productId, delta) {
    const item = cart.find(c => c.id === productId);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    updateCartUI();
  }

  function updateCartUI() {
    const totalItems = cart.reduce((s, c) => s + c.qty, 0);
    const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);

    cartBadge.textContent = totalItems;
    cartTotal.textContent = formatPrice(totalPrice);

    if (cart.length === 0) {
      cartEmpty.classList.remove('hidden');
      cartActive.classList.add('hidden');
    } else {
      cartEmpty.classList.add('hidden');
      cartActive.classList.remove('hidden');
    }

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';

      const imgContent = item.image
        ? `<img src="${item.image}" alt="${item.title}">`
        : (item.svg || '');

      el.innerHTML = `
        <div class="cart-item__img">${imgContent}</div>
        <div class="cart-item__details">
          <div class="cart-item__title">${item.title}</div>
          <div class="cart-item__price">${formatPrice(item.price * item.qty)}</div>
          <div class="cart-item__controls">
            <button class="cart-item__qty-btn" data-qty-id="${item.id}" data-delta="-1">−</button>
            <span class="cart-item__qty">${item.qty}</span>
            <button class="cart-item__qty-btn" data-qty-id="${item.id}" data-delta="1">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-remove-id="${item.id}" aria-label="Remover">
          <i data-lucide="trash-2"></i>
        </button>
      `;

      cartItemsContainer.appendChild(el);
    });

    lucide.createIcons({ nodes: [cartItemsContainer] });

    // Bind qty buttons
    $$('[data-qty-id]', cartItemsContainer).forEach(btn => {
      btn.addEventListener('click', () => {
        changeQty(btn.dataset.qtyId, parseInt(btn.dataset.delta));
      });
    });

    // Bind remove buttons
    $$('[data-remove-id]', cartItemsContainer).forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(btn.dataset.removeId);
      });
    });

    // Update checkout total
    const checkoutTotal = $('#checkout-total-price-text');
    if (checkoutTotal) checkoutTotal.textContent = formatPrice(totalPrice);
  }

  // ===== CHECKOUT =====
  const checkoutModal = $('#checkout-modal');
  const checkoutFormStep = $('#checkout-step-form');
  const checkoutSuccessStep = $('#checkout-step-success');

  $('#start-checkout-btn')?.addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCart();
    checkoutFormStep.classList.remove('hidden');
    checkoutSuccessStep.classList.add('hidden');
    checkoutModal.classList.remove('hidden');
    lucide.createIcons({ nodes: [checkoutModal] });
  });

  $('#close-checkout-btn')?.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
  });



  // Submit checkout
  $('#checkout-form-submit')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get user data
    const nome = $('#c-name')?.value || '';
    const cpf = $('#c-cpf')?.value || '';
    const email = $('#c-email')?.value || '';
    const telefone = $('#c-tel')?.value || '';
    const endereco = $('#c-address')?.value || '';

    // Get simulator configurations
    const simFace = $('#face-style-selector .sim-btn.active')?.textContent.trim() || 'Padrão';
    const simHands = $('#hand-style-selector .sim-btn.active')?.textContent.trim() || 'Padrão';
    const simCase = $('#case-material-selector .sim-btn.active')?.textContent.trim() || 'Padrão';
    const simWidgets = Array.from($$('#complications-selector .sim-btn.active')).map(b => b.textContent.trim()).join(', ') || 'Nenhum';

    // Get cart items
    let cartText = '';
    let totalPrice = 0;
    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      totalPrice += itemTotal;
      cartText += `- ${item.qty}x ${item.title} (${formatPrice(itemTotal)})\n`;
    });

    // Build message
    const message = `*NOVO PEDIDO - WF IMPORTS* 🛒\n\n` +
      `*DADOS DO CLIENTE*\n` +
      `Nome: ${nome}\n` +
      `CPF: ${cpf}\n` +
      `Telefone: ${telefone}\n` +
      `E-mail: ${email}\n` +
      `Endereço: ${endereco}\n\n` +
      `*CONFIGURAÇÕES DO SIMULADOR (WATCHFACE)*\n` +
      `Mostrador: ${simFace}\n` +
      `Ponteiros: ${simHands}\n` +
      `Acabamento: ${simCase}\n` +
      `Widgets: ${simWidgets}\n\n` +
      `*ITENS DO CARRINHO*\n${cartText}\n` +
      `*TOTAL DO PEDIDO:* ${formatPrice(totalPrice)}\n\n` +
      `Gostaria de finalizar meu pedido via WhatsApp!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5585994057055?text=${encodedMessage}`;

    // Clear cart and close modal
    cart = [];
    updateCartUI();
    checkoutModal.classList.add('hidden');

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  });

  $('#finish-success-btn')?.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== GOLD PARTICLES =====
  function spawnGoldParticles() {
    const canvas = $('#success-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: 150 + (Math.random() - 0.5) * 30,
        y: 150,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4 - 2,
        size: Math.random() * 4 + 1,
        alpha: 1,
        color: Math.random() > 0.5 ? '#ffd700' : '#d4af37'
      });
    }

    function animate() {
      ctx.clearRect(0, 0, 300, 300);
      let alive = false;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.alpha -= 0.012;
        if (p.alpha > 0) {
          alive = true;
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      });
      if (alive) requestAnimationFrame(animate);
    }
    animate();
  }

  // ===== PRODUCT MODAL =====
  const pmBackdrop = $('#product-modal-backdrop');
  const pmContainer = $('#product-modal-container');

  function openProductModal(product) {
    modalProductQty = 1;

    const badge = $('#pm-badge');
    const img = $('#pm-img');
    const svgWrap = $('#pm-svg-wrapper');
    const category = $('#pm-category');
    const title = $('#pm-title');
    const ratingCount = $('#pm-rating-count');
    const price = $('#pm-price');
    const installments = $('#pm-installments');
    const desc = $('#pm-desc');
    const variantSection = $('#pm-variant-section');
    const swatches = $('#pm-swatches');
    const selectedVariant = $('#pm-selected-variant');
    const features = $('#pm-features');
    const qtyVal = $('#pm-qty-val');

    badge.textContent = product.badge || '';

    if (product.image) {
      img.src = product.image;
      img.alt = product.title;
      img.classList.remove('hidden');
      svgWrap.classList.add('hidden');
    } else if (product.svg) {
      svgWrap.innerHTML = product.svg;
      svgWrap.classList.remove('hidden');
      img.classList.add('hidden');
    }

    const catMap = { watch: 'Relógio Inteligente', buds: 'Fones de Ouvido', straps: 'Pulseira', cases: 'Acessório' };
    category.textContent = catMap[product.category] || 'Produto';
    title.textContent = product.title;
    ratingCount.textContent = `(${Math.floor(Math.random() * 200 + 50)} avaliações)`;
    price.textContent = formatPrice(product.price);

    const inst = Math.ceil(product.price / 12);
    installments.textContent = `ou 12x de ${formatPrice(inst)} sem juros`;

    desc.textContent = product.desc;
    qtyVal.textContent = '1';

    // Variants
    if (product.variants && product.variants.length > 0) {
      variantSection.classList.remove('hidden');
      swatches.innerHTML = '';
      selectedVariant.textContent = product.variants[0].name;
      product.variants.forEach((v, i) => {
        const sw = document.createElement('div');
        sw.className = `pm__swatch${i === 0 ? ' active' : ''}`;
        sw.style.background = v.color;
        sw.title = v.name;
        sw.addEventListener('click', () => {
          $$('.pm__swatch', swatches).forEach(s => s.classList.remove('active'));
          sw.classList.add('active');
          selectedVariant.textContent = v.name;
        });
        swatches.appendChild(sw);
      });
    } else {
      variantSection.classList.add('hidden');
    }

    // Features
    features.innerHTML = '';
    (product.features || []).forEach(f => {
      const pill = document.createElement('span');
      pill.className = 'pm__feature-pill';
      pill.textContent = f;
      features.appendChild(pill);
    });

    pmBackdrop.classList.add('open');
    lucide.createIcons({ nodes: [pmContainer] });
  }

  function closeProductModal() {
    pmBackdrop.classList.remove('open');
  }

  $('#product-modal-close')?.addEventListener('click', closeProductModal);
  pmBackdrop?.addEventListener('click', (e) => {
    if (e.target === pmBackdrop) closeProductModal();
  });

  // Qty controls in modal
  $('#pm-qty-minus')?.addEventListener('click', () => {
    modalProductQty = Math.max(1, modalProductQty - 1);
    $('#pm-qty-val').textContent = modalProductQty;
  });

  $('#pm-qty-plus')?.addEventListener('click', () => {
    modalProductQty++;
    $('#pm-qty-val').textContent = modalProductQty;
  });

  // Add to cart from modal
  $('#pm-add-cart-btn')?.addEventListener('click', () => {
    const title = $('#pm-title').textContent;
    const product = PRODUCTS.find(p => p.title === title);
    if (product) {
      addToCart(product.id, modalProductQty);
      closeProductModal();
    }
  });

  // Wishlist toggle
  $('#pm-wishlist-btn')?.addEventListener('click', function() {
    this.classList.toggle('liked');
    const icon = this.querySelector('i');
    if (this.classList.contains('liked')) {
      showToast('Adicionado aos favoritos!', 'heart');
    }
  });

  // ===== SMOOTH SCROLL NAV LINKS =====
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== PAGE LOADED CLASS =====
  document.body.classList.add('loaded');
});

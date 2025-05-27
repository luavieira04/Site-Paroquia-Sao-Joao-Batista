// Scroll suave para links do menu
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Submissão de formulários com alerta
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    form.reset();
  });
});

document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const panel = button.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });


  /* eventos */

  const eventos = [
    {
      titulo: "Festa do Padroeiro São João Batista.",
      data: "Data: 01 a 29 de Maio",
      imagem: "img/evento1.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Quermesse na Praça Guadalajara.",
      imagem: "img/evento2.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Missa Solene de Abertura.",
      data: "Data: 01/06/2025",
      imagem: "img/evento3.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Festa de Santo Antônio.",
      data: "Data: 13/06/2025",
      imagem: "img/evento4.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Programação Novena.",
      imagem: "img/evento5.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Programação 24/06/2025",
      imagem: "img/evento6.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Programação de 27 a 29 de Junho.",
      imagem: "img/evento7.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Solenidade do Sagrado Coração de Jesus.",
      imagem: "img/evento8.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Festa do Imaculado Coração de Maria.",
      imagem: "img/evento9.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    {
      titulo: "Santa Missa Solene com Crismas.",
      imagem: "img/evento10.jpeg",
      link: "https://www.instagram.com/saojoaobatista013?igsh=MWJpZGgxMGI1NHU0bg=="
    },
    
  ];

  
  
  // Galeria 2

  const slides = [
    { src: 'img/foto 1.jpg', alt: 'Foto com o bispo, padre, coroinhas e ministros' },
    { src: 'img/foto2.jpg', alt: 'Bispo Tarcísio e a imagem de Jesus' },
    { src: 'img/foto3.jpg', alt: 'Padre Renan' },
    { src: 'img/foto4.jpg', alt: 'Padre Thiago com os coroinhas' },
    { src: 'img/foto5.jpg', alt: 'Padre Thiago com o bispo Tarcísio celebrando a missa' },
    { src: 'img/foto6.jpg', alt: 'Entrada do Padre Thiago na missa de ramos' },
    { src: 'img/foto7.jpg', alt: 'Encontro das imagens de Jesus e Maria' },
    { src: 'img/foto8.jpg', alt: 'Padre Thiago lavando os pés das pessoas' },
    { src: 'img/foto9.jpg', alt: 'Missa da Paixão de cristo' },
    { src: 'img/foto10.jpg', alt: 'Padre Thiago benzendo as pessoas' },
    { src: 'img/foto11.jpg', alt: 'Padre Thiago e a imagem de nossa senhora de fátima' },
    { src: 'img/foto12.jpg', alt: 'Imagem de Nossa senhora de Fátima' },
    { src: 'img/foto13.jpg', alt: 'Procissão de Nossa Senhora de Fátima' },
    { src: 'img/foto14.jpg', alt: 'Imagem de São João Batista' },
    { src: 'img/foto15.jpg', alt: 'Padre Thiago na homilia' },
    { src: 'img/foto16.jpg', alt: 'Sagrada comunhão com bispo Tarcísio' },
    { src: 'img/foto17.jpg', alt: 'Igreja internamente' },
    { src: 'img/foto18.jpg', alt: 'Coroinhas na procissão' },
    { src: 'img/foto19.jpg', alt: 'Bispo Tarcísio com a imagem de São joão Batista' },
    { src: 'img/foto20.jpg', alt: 'Padre Thiago celebrando a missa' },
    { src: 'img/foto21.jpg', alt: 'Padre Thiago celebrando a missa na igreja Santana e São Joaquim' },
    { src: 'img/foto22.jpg', alt: 'Padre Thiago celebrando a missa na igreja Bom Jesus' },
    { src: 'img/foto23.jpg', alt: 'Louvor ao vivo' },
    { src: 'img/foto24.jpg', alt: 'Padre Thiago benzendo os animais' },
    { src: 'img/foto25.jpg', alt: 'Imagem de Nossa senhora Aparecida' },
    { src: 'img/foto26.jpg', alt: 'Padre Thiago celebrando a missa' },
    { src: 'img/foto27.jpg', alt: 'Missa de nossa senhora Aparecida' },
    { src: 'img/foto28.jpg', alt: 'Primeira eucaristia' },
    { src: 'img/foto29.jpg', alt: 'Diácono acendendo as velas' },
    { src: 'img/foto30.jpg', alt: 'Diácono e o Padre Thiago' },
    { src: 'img/foto31.jpg', alt: 'Padre e o Diácono' },
    { src: 'img/foto32.jpg', alt: 'Bispo Tarcísio, Diácono, coroinha e as crianças' },
    { src: 'img/foto33.jpg', alt: 'Padre e os colaboradores da paróquia' },
    { src: 'img/foto34.jpg', alt: 'Diácono Guerra acendendo a vela' },
    { src: 'img/foto35.jpg', alt: 'Dois Diáconos entrando na igreja' },
    { src: 'img/foto36.jpg', alt: 'Bisco celebrando a missa' },
    { src: 'img/foto37.jpg', alt: 'Bispo e a imagem de Jesus' },
    { src: 'img/foto38.jpg', alt: 'Padre Renan, Diácono e os colaboradores da paróquia' },
    { src: 'img/foto39.jpeg', alt: 'Diácono dando a Hóstia' },
    { src: 'img/foto40.jpeg', alt: 'Batismo' },
    { src: 'img/foto41.jpeg', alt: 'celebração da missa' },
    { src: 'img/foto42.jpeg', alt: 'celebração em frente a igreja' },
    { src: 'img/foto43.jpeg', alt: 'Missa de Ramos' },
    { src: 'img/foto44.jpeg', alt: 'Entrada da igreja' },
    { src: 'img/foto45.jpeg', alt: 'Celebração da missa' },
    { src: 'img/foto46.jpeg', alt: 'Celebração da missa' },
    { src: 'img/foto47.jpeg', alt: 'Pessoas na missa' },
    { src: 'img/foto50.jpeg', alt: 'Padre Thiago erguendo o cálice' },
    { src: 'img/foto51.jpeg', alt: 'Interior da igreja' },
    { src: 'img/foto52.jpeg', alt: 'Padre Thiago erguendo a eucaristia' },
    { src: 'img/foto53.jpeg', alt: 'Sagrada comunhão' },
    { src: 'img/foto54.jpeg', alt: 'Padre Thiago e a imagem de nossa senhora' },
    { src: 'img/foto55.jpeg', alt: 'Padre Thiago celebrando a missa' },
    { src: 'img/foto56.jpeg', alt: 'Padre entrando na celebração' },
  ];
  
  let currentSlide = 0;
  const slideImg = document.getElementById('slide');
  const slideCaption = document.getElementById('slide-caption');
  
  function showSlide(index) {
    slideImg.style.opacity = 0;
  
    setTimeout(() => {
      slideImg.src = slides[index].src;
      slideCaption.textContent = slides[index].caption;
      slideImg.style.opacity = 1;
    }, 300);
  }
  
  function startSlideshow() {
    showSlide(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000); // 5 segundos por imagem
  }
  
  window.onload = startSlideshow;
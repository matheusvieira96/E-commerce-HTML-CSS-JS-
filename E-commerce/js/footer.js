const createrFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `   <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Masculino</li>
            <li><a href="#" class="footer-link">Camisetas</a></li>
            <li><a href="#" class="footer-link">Casacos</a></li>
            <li><a href="#" class="footer-link">Regatas</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Calças</a></li>
            <li><a href="#" class="footer-link">Bermudas</a></li>
            <li><a href="#" class="footer-link">Sapatos</a></li>
            <li><a href="#" class="footer-link">Casual</a></li>
            <li><a href="#" class="footer-link">Relógios</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Feminino</li>
            <li><a href="#" class="footer-link">Camisetas</a></li>
            <li><a href="#" class="footer-link">Casacos</a></li>
            <li><a href="#" class="footer-link">Regatas</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Calças</a></li>
            <li><a href="#" class="footer-link">Vestidos</a></li>
            <li><a href="#" class="footer-link">Sapatos</a></li>
            <li><a href="#" class="footer-link">Bolsas</a></li>
            <li><a href="#" class="footer-link">Relógios</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">Sobre Nós</p>
    <p class="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus bibendum ligula non dapibus fringilla. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Donec accumsan quis ipsum sed elementum. 
        Mauris ligula odio, iaculis vitae luctus at, vestibulum sit amet metus. 
        Aenean risus ante, pharetra a condimentum vitae, iaculis sed erat. 
        Proin neque mauris, sagittis eu ex sit amet, fringilla dapibus ex. 
        Nulla suscipit sed nisl sed placerat. In aliquam urna diam, ac placerat ligula convallis nec. 
        Etiam rutrum erat eu suscipit efficitur. Donec eget mollis purus. 
        Cras id volutpat magna, et gravida justo.
        Aenean risus ante, pharetra a condimentum vitae, iaculis sed erat. 
        Proin neque mauris, sagittis eu ex sit amet, fringilla dapibus ex. 
        Nulla suscipit sed nisl sed placerat. In aliquam urna diam, ac placerat ligula convallis nec. 
        Etiam rutrum erat eu suscipit efficitur. Donec eget mollis purus. 
        Cras id volutpat magna, et gravida justo.</p>
        <p class="info">Email do Suporte - helpsupport@clothing.com</p>
        <p class="info"> SAC - 0800 123 456 789</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link"> Termos & Serviços</a>
                <a href="#" class="social-link"> Política de Privacidade</a>
            </div>
            <div>
                <a href="#" class="social-link"> <img class="social-media-icon" src="img/instagram.png" alt=""></a>
                <a href="#" class="social-link"> <img class="social-media-icon" src="img/facebook.png" alt=""></a>
                <a href="#" class="social-link"> <img class="social-media-icon" src="img/twitter.png" alt=""></a>
            </div>
        </div>
        <p class="footer-credit">Clothing, as melhores coleções fashion online</p>  
    `;
}

createrFooter();
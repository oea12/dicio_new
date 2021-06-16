$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("_Users_espinosa.o_Downloads_Nueva carpeta con elementos_MAIN_FILES_appy_assets_images_logo_UserLib", "_Users_espinosa.o_Downloads_Nueva carpeta con elementos_MAIN_FILES_appy_assets_images_logo_UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "_Users_espinosa.o_Downloads_Nueva carpeta con elementos_MAIN_FILES_appy_assets_images_logo_UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / div');
        comp_comp1.code = '<div class="section-content">\
    <div class="container section-wrap">\
        <h1 class="section-title text-center" data-appear-animation="fadeInDown" data-appear-animation-delay="900">Services</h1>\
        <div class="services-wrap inverse no-appear">\
            <div class="wrap-container">\
                <div class="column column-one">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="600">\
                        <canvas class="circle-skill" data-color="#1eb3c5" data-percent="75" data-title="Branding" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Branding</h3>\
                            <div class="text">\
                                <p>We have all resources needed to make your brand better know. We offer professional brand identity development services designed for small business. Every client is different and we don’t just "box up" a branding package that will work for everyone. You’re special, so your branding proposal should be as well.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-one -->\
                <div class="column column-two">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="400">\
                        <canvas class="circle-skill" data-color="#25b785" data-percent="60" data-title="Planning" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Planning</h3>\
                            <div class="text">\
                                <p>We are ready for the unexpected, that is an important part of business planning. We review your current policies, make recommendations if necessary and work with you to create an insurance package designed to help provide comprehensive protection for you and your business.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="500">\
                        <canvas class="circle-skill" data-color="#4e67c4" data-percent="65" data-title="Marketing" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Marketing</h3>\
                            <div class="text">\
                                <p>Creating proficient marketing strategies to get you more users. We will not only help you get your business online, but also help to drive a continuous stream of profitable traffic to your Website through the number of programs. We can also help you integrate your offline promotions with your on-line activities.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-two -->\
                <div class="column column-three column-center">\
                    <div class="circle-wrap main-circle" data-appear-animation="zoomIn" data-appear-animation-delay="100">\
                        <div class="circle-content">\
                            <h3 class="title">Best digital solutions for your business</h3>\
                        </div>\
                        <div class="opened-content">\
                            <a href="#" class="close"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
                                    <path fill="inherit" d="M23.3,23.3c-0.6,0.6-1.5,0.6-2.1,0L0.7,2.8c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0\
					  l20.5,20.5C23.9,21.8,23.9,22.7,23.3,23.3L23.3,23.3z M23.3,2.8L2.8,23.3c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1L21.2,0.7\
					  c0.6-0.6,1.5-0.6,2.1,0C23.9,1.3,23.9,2.2,23.3,2.8L23.3,2.8z"/>\
                                </svg> </a>\
                        </div>\
                        <!-- .opened-content -->\
                    </div>\
                    <!-- .main-circle -->\
                </div>\
                <!-- .column-three -->\
                <div class="column column-four">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="700">\
                        <canvas class="circle-skill" data-color="#da8326" data-percent="90" data-title="Design" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Design</h3>\
                            <div class="text">\
                                <p>We are an expert at creating designed websites to fit your needs. We strive to create a unique design for your website that will help your business, corporation, or individual enterprise stand out. If you\'re looking for a corporate presence website, e-commerce, or even just a landing page, our team is happy to help.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="800">\
                        <canvas class="circle-skill" data-color="#8f52c8" data-percent="60" data-title="Development" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Development</h3>\
                            <div class="text">\
                                <p>Development of complex applications for various types of tasks. We don\'t just design websites, we can help you with your web development needs as well. We can deliver exactly what you are looking for, such as a custom e-commerce application, client portals, Facebook applications, API development and SQL databases.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-four -->\
                <div class="column column-five">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="900">\
                        <canvas class="circle-skill" data-color="#da2626" data-percent="80" data-title="Hosting" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Hosting</h3>\
                            <div class="text">\
                                <p>Reliable web hosting will accommodate your website\'s needs. Our hosting services range from shared hosting, where your site is given an allotted amount of space to use on one server that has many other sites, a virtually dedicated hosting service, as well as dedicated web hosting. We also offer PCI hosting as well as enterprise hosting.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-five -->\
            </div>\
            <!-- .wrap-container -->\
        </div>\
        <!-- .services-wrap -->\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / div');
        comp_comp2.code = '<div class="section-content">\
    <div class="container section-wrap">\
        <h1 class="section-title text-center" data-appear-animation="fadeInDown" data-appear-animation-delay="900">Services</h1>\
        <div class="services-wrap inverse no-appear">\
            <div class="wrap-container">\
                <div class="column column-one">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="600">\
                        <canvas class="circle-skill" data-color="#1eb3c5" data-percent="75" data-title="Branding" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Branding</h3>\
                            <div class="text">\
                                <p>We have all resources needed to make your brand better know. We offer professional brand identity development services designed for small business. Every client is different and we don’t just "box up" a branding package that will work for everyone. You’re special, so your branding proposal should be as well.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-one -->\
                <div class="column column-two">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="400">\
                        <canvas class="circle-skill" data-color="#25b785" data-percent="60" data-title="Planning" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Planning</h3>\
                            <div class="text">\
                                <p>We are ready for the unexpected, that is an important part of business planning. We review your current policies, make recommendations if necessary and work with you to create an insurance package designed to help provide comprehensive protection for you and your business.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="500">\
                        <canvas class="circle-skill" data-color="#4e67c4" data-percent="65" data-title="Marketing" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Marketing</h3>\
                            <div class="text">\
                                <p>Creating proficient marketing strategies to get you more users. We will not only help you get your business online, but also help to drive a continuous stream of profitable traffic to your Website through the number of programs. We can also help you integrate your offline promotions with your on-line activities.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-two -->\
                <div class="column column-three column-center">\
                    <div class="circle-wrap main-circle" data-appear-animation="zoomIn" data-appear-animation-delay="100">\
                        <div class="circle-content">\
                            <h3 class="title">Best digital solutions for your business</h3>\
                        </div>\
                        <div class="opened-content">\
                            <a href="#" class="close"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
                                    <path fill="inherit" d="M23.3,23.3c-0.6,0.6-1.5,0.6-2.1,0L0.7,2.8c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0\
					  l20.5,20.5C23.9,21.8,23.9,22.7,23.3,23.3L23.3,23.3z M23.3,2.8L2.8,23.3c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1L21.2,0.7\
					  c0.6-0.6,1.5-0.6,2.1,0C23.9,1.3,23.9,2.2,23.3,2.8L23.3,2.8z"/>\
                                </svg> </a>\
                        </div>\
                        <!-- .opened-content -->\
                    </div>\
                    <!-- .main-circle -->\
                </div>\
                <!-- .column-three -->\
                <div class="column column-four">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="700">\
                        <canvas class="circle-skill" data-color="#da8326" data-percent="90" data-title="Design" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Design</h3>\
                            <div class="text">\
                                <p>We are an expert at creating designed websites to fit your needs. We strive to create a unique design for your website that will help your business, corporation, or individual enterprise stand out. If you\'re looking for a corporate presence website, e-commerce, or even just a landing page, our team is happy to help.</p>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="800">\
                        <canvas class="circle-skill" data-color="#8f52c8" data-percent="60" data-title="Development" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Development</h3>\
                            <div class="text">\
                                <p>Development of complex applications for various types of tasks. We don\'t just design websites, we can help you with your web development needs as well. We can deliver exactly what you are looking for, such as a custom e-commerce application, client portals, Facebook applications, API development and SQL databases.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-four -->\
                <div class="column column-five">\
                    <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="900">\
                        <canvas class="circle-skill" data-color="#da2626" data-percent="80" data-title="Hosting" width="150" height="150"></canvas>\
                        <div class="description">\
                            <h3 class="title">Hosting</h3>\
                            <div class="text">\
                                <p>Reliable web hosting will accommodate your website\'s needs. Our hosting services range from shared hosting, where your site is given an allotted amount of space to use on one server that has many other sites, a virtually dedicated hosting service, as well as dedicated web hosting. We also offer PCI hosting as well as enterprise hosting.</p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <!-- .column-five -->\
            </div>\
            <!-- .wrap-container -->\
        </div>\
        <!-- .services-wrap -->\
    </div>\
</div>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp3 = new PgComponentType('comp3', 'Comp 3 / section');
        comp_comp3.code = '<section class="section align-without-title services-section" data-background="#d73e4d" data-shadow="rgba(0,0,0,0.03)" data-nav-color="#ffffff" data-nav-color-text="#d73e4d" data-title-color="#fff7cc" data-title="Services" data-anchor="services">\
    <div class="section-content">\
        <div class="container section-wrap">\
            <h1 class="section-title text-center" data-appear-animation="fadeInDown" data-appear-animation-delay="900">Services</h1>\
            <div class="services-wrap inverse no-appear">\
                <div class="wrap-container">\
                    <div class="column column-one">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="600">\
                            <canvas class="circle-skill" data-color="#1eb3c5" data-percent="75" data-title="Branding" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Branding</h3>\
                                <div class="text">\
                                    <p>We have all resources needed to make your brand better know. We offer professional brand identity development services designed for small business. Every client is different and we don’t just "box up" a branding package that will work for everyone. You’re special, so your branding proposal should be as well.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-one -->\
                    <div class="column column-two">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="400">\
                            <canvas class="circle-skill" data-color="#25b785" data-percent="60" data-title="Planning" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Planning</h3>\
                                <div class="text">\
                                    <p>We are ready for the unexpected, that is an important part of business planning. We review your current policies, make recommendations if necessary and work with you to create an insurance package designed to help provide comprehensive protection for you and your business.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="500">\
                            <canvas class="circle-skill" data-color="#4e67c4" data-percent="65" data-title="Marketing" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Marketing</h3>\
                                <div class="text">\
                                    <p>Creating proficient marketing strategies to get you more users. We will not only help you get your business online, but also help to drive a continuous stream of profitable traffic to your Website through the number of programs. We can also help you integrate your offline promotions with your on-line activities.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-two -->\
                    <div class="column column-three column-center">\
                        <div class="circle-wrap main-circle" data-appear-animation="zoomIn" data-appear-animation-delay="100">\
                            <div class="circle-content">\
                                <h3 class="title">Best digital solutions for your business</h3>\
                            </div>\
                            <div class="opened-content">\
                                <a href="#" class="close"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
                                        <path fill="inherit" d="M23.3,23.3c-0.6,0.6-1.5,0.6-2.1,0L0.7,2.8c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0\
					  l20.5,20.5C23.9,21.8,23.9,22.7,23.3,23.3L23.3,23.3z M23.3,2.8L2.8,23.3c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1L21.2,0.7\
					  c0.6-0.6,1.5-0.6,2.1,0C23.9,1.3,23.9,2.2,23.3,2.8L23.3,2.8z"/>\
                                    </svg> </a>\
                            </div>\
                            <!-- .opened-content -->\
                        </div>\
                        <!-- .main-circle -->\
                    </div>\
                    <!-- .column-three -->\
                    <div class="column column-four">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="700">\
                            <canvas class="circle-skill" data-color="#da8326" data-percent="90" data-title="Design" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Design</h3>\
                                <div class="text">\
                                    <p>We are an expert at creating designed websites to fit your needs. We strive to create a unique design for your website that will help your business, corporation, or individual enterprise stand out. If you\'re looking for a corporate presence website, e-commerce, or even just a landing page, our team is happy to help.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="800">\
                            <canvas class="circle-skill" data-color="#8f52c8" data-percent="60" data-title="Development" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Development</h3>\
                                <div class="text">\
                                    <p>Development of complex applications for various types of tasks. We don\'t just design websites, we can help you with your web development needs as well. We can deliver exactly what you are looking for, such as a custom e-commerce application, client portals, Facebook applications, API development and SQL databases.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-four -->\
                    <div class="column column-five">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="900">\
                            <canvas class="circle-skill" data-color="#da2626" data-percent="80" data-title="Hosting" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Hosting</h3>\
                                <div class="text">\
                                    <p>Reliable web hosting will accommodate your website\'s needs. Our hosting services range from shared hosting, where your site is given an allotted amount of space to use on one server that has many other sites, a virtually dedicated hosting service, as well as dedicated web hosting. We also offer PCI hosting as well as enterprise hosting.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-five -->\
                </div>\
                <!-- .wrap-container -->\
            </div>\
            <!-- .services-wrap -->\
        </div>\
    </div>\
    <!-- .section-content -->\
</section>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp4 = new PgComponentType('comp4', 'Comp 4 / section');
        comp_comp4.code = '<section class="section align-without-title services-section" data-background="#d73e4d" data-shadow="rgba(0,0,0,0.03)" data-nav-color="#ffffff" data-nav-color-text="#d73e4d" data-title-color="#fff7cc" data-title="Services" data-anchor="services">\
    <div class="section-content">\
        <div class="container section-wrap">\
            <h1 class="section-title text-center" data-appear-animation="fadeInDown" data-appear-animation-delay="900">Services</h1>\
            <div class="services-wrap inverse no-appear">\
                <div class="wrap-container">\
                    <div class="column column-one">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="600">\
                            <canvas class="circle-skill" data-color="#1eb3c5" data-percent="75" data-title="Branding" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Branding</h3>\
                                <div class="text">\
                                    <p>We have all resources needed to make your brand better know. We offer professional brand identity development services designed for small business. Every client is different and we don’t just "box up" a branding package that will work for everyone. You’re special, so your branding proposal should be as well.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-one -->\
                    <div class="column column-two">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="400">\
                            <canvas class="circle-skill" data-color="#25b785" data-percent="60" data-title="Planning" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Planning</h3>\
                                <div class="text">\
                                    <p>We are ready for the unexpected, that is an important part of business planning. We review your current policies, make recommendations if necessary and work with you to create an insurance package designed to help provide comprehensive protection for you and your business.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="500">\
                            <canvas class="circle-skill" data-color="#4e67c4" data-percent="65" data-title="Marketing" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Marketing</h3>\
                                <div class="text">\
                                    <p>Creating proficient marketing strategies to get you more users. We will not only help you get your business online, but also help to drive a continuous stream of profitable traffic to your Website through the number of programs. We can also help you integrate your offline promotions with your on-line activities.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-two -->\
                    <div class="column column-three column-center">\
                        <div class="circle-wrap main-circle" data-appear-animation="zoomIn" data-appear-animation-delay="100">\
                            <div class="circle-content">\
                                <h3 class="title">Best digital solutions for your business</h3>\
                            </div>\
                            <div class="opened-content">\
                                <a href="#" class="close"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
                                        <path fill="inherit" d="M23.3,23.3c-0.6,0.6-1.5,0.6-2.1,0L0.7,2.8c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0\
					  l20.5,20.5C23.9,21.8,23.9,22.7,23.3,23.3L23.3,23.3z M23.3,2.8L2.8,23.3c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1L21.2,0.7\
					  c0.6-0.6,1.5-0.6,2.1,0C23.9,1.3,23.9,2.2,23.3,2.8L23.3,2.8z"/>\
                                    </svg> </a>\
                            </div>\
                            <!-- .opened-content -->\
                        </div>\
                        <!-- .main-circle -->\
                    </div>\
                    <!-- .column-three -->\
                    <div class="column column-four">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="700">\
                            <canvas class="circle-skill" data-color="#da8326" data-percent="90" data-title="Design" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Design</h3>\
                                <div class="text">\
                                    <p>We are an expert at creating designed websites to fit your needs. We strive to create a unique design for your website that will help your business, corporation, or individual enterprise stand out. If you\'re looking for a corporate presence website, e-commerce, or even just a landing page, our team is happy to help.</p>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="800">\
                            <canvas class="circle-skill" data-color="#8f52c8" data-percent="60" data-title="Development" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Development</h3>\
                                <div class="text">\
                                    <p>Development of complex applications for various types of tasks. We don\'t just design websites, we can help you with your web development needs as well. We can deliver exactly what you are looking for, such as a custom e-commerce application, client portals, Facebook applications, API development and SQL databases.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-four -->\
                    <div class="column column-five">\
                        <div class="circle-wrap" data-appear-animation="zoomIn" data-appear-animation-delay="900">\
                            <canvas class="circle-skill" data-color="#da2626" data-percent="80" data-title="Hosting" width="150" height="150"></canvas>\
                            <div class="description">\
                                <h3 class="title">Hosting</h3>\
                                <div class="text">\
                                    <p>Reliable web hosting will accommodate your website\'s needs. Our hosting services range from shared hosting, where your site is given an allotted amount of space to use on one server that has many other sites, a virtually dedicated hosting service, as well as dedicated web hosting. We also offer PCI hosting as well as enterprise hosting.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <!-- .column-five -->\
                </div>\
                <!-- .wrap-container -->\
            </div>\
            <!-- .services-wrap -->\
        </div>\
    </div>\
    <!-- .section-content -->\
</section>';
        comp_comp4.parent_selector = null;
        f.addComponentType(comp_comp4);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("_Users_espinosa.o_Downloads_Nueva carpeta con elementos_MAIN_FILES_appy_assets_images_logo_UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3, comp_comp4]);

        f.addLibSection(section);
   });
});
<script type="text/javascript">
                        $(document).ready(function(){
                                
                                //MENU PORTFOLIO
                                $("#portfolioMenu li a").live("click", function(e){
                                        e.preventDefault();
                                        var linkClicado = $(this);
                                
                                        // Se já estiver marcado, não faz nada
                                        if($(linkClicado).hasClass("current")) return;
                                
                                        // Classe current do menu
                                        $("#portfolioMenu li a").removeClass("current");
                                        $(this).addClass("current");
                                        
                                        var a = $("div.thumbs ul:eq("+ $(this).parent().index() +") a.current");
                                        
                                        // Muda os thumb
                                        $("div.thumbs ul").fadeOut(150,"easeOutQuad");
                    $("div.thumbs ul:eq("+ $(this).parent().index() +")").fadeIn(200,"easeOutQuad",function(){
                      $(a).click();
                    })

                                });
                                
                                // THUMB 
                                $(".one-thumb a").live("click", function(e){
                                        e.preventDefault();
                                        
                                        $("#galleryPrev").removeClass("end");
                                        $("#galleryNext").removeClass("end");
                                        
                                        var a = $(this);
                                        
                                        // Marca o current
                                        $(this).parents("ul").find("a").removeClass("current");
                                        $(this).addClass("current");
                                        
                                        
                                        
                                        // Centraliza e carrega
                                        divParent = $(this).parent().parent().parent();
                                        divParentWidth = parseInt($(divParent).width());
                                        divParentCenter = parseInt(divParentWidth/2);
                                        $(divParent).scrollTo($(this), 600,{
                                                offset:(-divParentCenter)+50,
                                                easing:'easeOutQuad',
                                                onAfter:function(){
                                                        
                                                        
                                                }});

                    // loading
                    if($(".one-slide>img").attr('src') != $("img",$(a)).attr("data-large")){
                                          $('.slides-loader').show();
                                        }

                    // Carrega a foto
                    $(".one-slide>img").attr('src',$("img",$(a)).attr("data-large")).one('load',function(){
                                          $('.slides-loader').fadeOut(300);
                                        });

                                        // Atualiza setas
                                        var li = $(a).parent();
                                        if($(li).is(":first-child")) { $("#galleryPrev").addClass("end"); }
                                        if($(li).is(":last-child")) { $("#galleryNext").addClass("end"); }
                                });
                                
                                // SETAS
                                $("#galleryPrev").click(function(e){
                                        e.preventDefault();
                                        var li = $("div.thumbs ul:visible a.current").parent();
                                        
                                        if(!$(li).prev().is(":first")) {
                                                var a = $(li).prev().find("a");
                                                $(a).click();
                                        }
                                });
                                $("#galleryNext").click(function(e){
                                        e.preventDefault();
                                        var li = $("div.thumbs ul:visible a.current").parent();
                                        
                                        if(!$(li).next().is(":last")) {
                                                var a = $(li).next().find("a");
                                                $(a).click();
                                        }
                                });
                                
                                // Atualiza setas
                                var li = $("div.thumbs ul:visible a.current").parent();
                                if($(li).is(":first-child")) { $("#galleryPrev").addClass("end"); }
                                if($(li).is(":last-child")) { $("#galleryNext").addClass("end"); }
                                
                                // Loading da imagem
                                // $(".one-slide>img")
                                
                                $("#portfolioMenu li:first a").click();
                                
                        });
                </script>
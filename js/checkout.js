$(document).ready(function(){
        let fSize=$('#fsize');
        let fCrust=$('#fcrust');
        let fToping=$('#ftoping');
        let form=document.forms['menu'];
        let sizes=$('size');
        let size=$('#size');
        let size1=$('#size1');
        let size2=$('#size2');
        let size3=$('#size3');
        let crust=$('#crust');
        let crust1=$('#crust1');
        let crust2=$('#crust2');
        let crust3=$('#crust3');
        let toping=form['toping'];
        let num=$('#qtty');
        let deliver=form['deliver'];
        let loc=$('.location');
        let sub=$('.sub');
        let popup=$('.popup');
        let cancel=$('.btncancel');
        let tot=document.getElementById('total');
        let selection=$('#selection');
       
        //stage size selected
        // let toppingSelected=toping.length;
        size.click(function(){
                fSize.val();
                fSize.val(1);
                fSize.text("small")

        })
        size1.click(function(){
                fSize.val();
                fSize.val(2);
                fSize.text("medium")

        })
        size2.click(function(){
                fSize.val();
                fSize.val(3);
                fSize.text("large")

        })
        size3.click(function(){
                fSize.val();
                fSize.val(4);
                fSize.text("extra large")

        })
        
        //end size selection
        //start crust selection staging
 
        crust.click(function(){
                fCrust.val("");
                fCrust.val(1);
                fCrust.text("thin")
        })
        crust1.click(function(){
                fCrust.val("");
                fCrust.val(2);
                fCrust.text("thicc")

        })
        crust2.click(function(){
                fCrust.val("");
                fCrust.val(3);
                fCrust.text("deep")

        })
        crust3.click(function(){
                fCrust.val("");
                fCrust.val(4);
                fCrust.text("cheese filled")

        })
        //end crust selection
        
        //start toppings selection
        
        
        sub.click(function (){
                let topping=parseInt( document.querySelectorAll('input[class="toping"]:checked').length,10);
                let topingChecked=(topping* 50);
                let total=(((((fSize.val()-1)*250)+500)+((fCrust.val()-1)*50))+ topingChecked)* parseInt(num.val(),10);             
                
                if(fSize.val() && fCrust.val() && topping !=0){
                        popup.addClass('show');
                        tot.innerHTML=total;

                        if(deliver.checked == false){
                                loc.css('display','none');
                        selection.text(parseInt(num.val(),10) +" "+ fSize.text()+' pizza with ' +fCrust.text()+ ' crust and ' +topping+" topings ");                         

                                
                        }else{
                                loc.css('display','flex');
                        selection.text(parseInt(num.val(),10) +" "+ fSize.text()+' pizza with ' +fCrust.text()+ ' crust and ' +topping+" topings ");                         

                        }
                }else{
                        alert('plaese fill out all fields');
                }
        })
        $('.cls').click(function(){
                var loc=$('#loc');
                if(loc.val() != "" ){
                        alert("your pizza will be delivered in 30 - 50 minutes ");
                        location.reload(true);
                }
                else{
                         alert('your pizza will be ready in an hour ,pick it up at your nearest store');
                         location.reload(true);

                }
        })
        cancel.click(function(){
                popup.removeClass('show');
        })

        
})
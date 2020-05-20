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

        //stage size selected
        // let toppingSelected=toping.length;
        size.click(function(){
                fSize.val();
                fSize.val(1);
        })
        size1.click(function(){
                fSize.val();
                fSize.val(2);
        })
        size2.click(function(){
                fSize.val();
                fSize.val(3);
        })
        size3.click(function(){
                fSize.val();
                fSize.val(4);
        })
        
        //end size selection
        //start crust selection staging
 
        crust.click(function(){
                fCrust.val("");
                fCrust.val(1);
        })
        crust1.click(function(){
                fCrust.val("");
                fCrust.val(2);
        })
        crust2.click(function(){
                fCrust.val("");
                fCrust.val(3);
        })
        crust3.click(function(){
                fCrust.val("");
                fCrust.val(4);
        })
        //end crust selection
        
        //start toppings selection
        
        
        sub.click(function (){
                let delTotal=document.querySelectorAll('#deliveryTotal');
                let topping=parseInt( document.querySelectorAll('input[class="toping"]:checked').length,10);
                let topingChecked=(topping* 50);
                let total=(((((fSize.val()-1)*250)+500)+((fCrust.val()-1)*50))+ topingChecked)* parseInt(num.val(),10);             
                if(fSize.val() && fCrust.val() && topping !=0){
                        popup.addClass('show');
                        tot.innerHTML=total;
                        if(deliver.checked == false){
                                loc.css('display','none');
                                
                        }else{
                                loc.css('display','flex');
                        }
                }else{
                        alert('plaese fill out all fields');
                }
        })
        cancel.click(function(){
                popup.removeClass('show');
        })

        
})
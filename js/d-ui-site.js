/**
 * Created with JetBrains WebStorm.
 * User: Congwen
 * Date: 8/4/13
 * Time: 4:46 AM
 * To change this template use File | Settings | File Templates.
 */

app.directive('modalA', ['$http', '$rootScope', '$compile', '$templateCache', '$timeout',
    function($http, $rootScope, $compile, $templateCache, $timeout){

        var dirLink = function(scope, elem, attr){
            var modalElem = $('#modal_wrapper');
            var modalContent = angular.element($('#modal_content'));
            var template;
            //Close Modal Function
            function removeModal(){
                modalElem.removeClass('show').addClass('hide');
                modalContent.html('');
            }

            modalElem.find('#modal_overlay').bind('click', function(){
//            console.log('clicked on overlay')
                removeModal();
            });

            elem.bind('click',function(){
                if (attr.modalA){
                    $timeout(function(){
                        $http.get(
                            attr.modalA,
                            {
                                cache: $templateCache
                            }
                        ).then(function(data){
                                template = data.data;
//                                console.log(data);
                                modalContent.append($compile(template)(scope));
                            });
                        console.log('element click');
                        modalElem.addClass('show').removeClass('hide');
                    })
                }
                else if(attr.modalQuery){
                    template = angular.element(
                        '<div class="modalDemoContent">'
                            + '<p class="audiowide">Are you Sure You want to Go Back?</p> '
                            + '<div> <button class="confirm"">Yes</button> '
                                + '<button class="reject">No</button>'
                            + '</div>'
                        + '</div>');

//                    template = $(attr.modalQuery).html();
                    console.log(template);
//                    modalContent.append($compile(template)(scope));
                    modalContent.append(template);
                    $(template).find('button.confirm').click(function(){
                        history.back();
                        removeModal();
                    })
                    $(template).find('button.reject').click(function(){
                        removeModal();
                    })

                    modalElem.addClass('show').removeClass('hide');
                }
                else{
                    console.log('uh OH');
                }
            });
        }
        return {
//        template: "<div></div>",
            link: dirLink,
            scope: '='
        }
    }]);


app.directive('zoomPad', function(){
    function dLink(sc,el,at,ct){
        var
            xCoord, yCoord,
            halfZoomSize = sc.zoomSize/ 2,

            zoomImg = el.find('img.zoomPad_img'),
            outerDiv = zoomImg.parent('div'),
            zoomScope = el.find('div.zoomScope').css({ //shadow
                display: 'none'
            }),
//                zoomPup = el.find('div.zoomPup');
            zoomPup = $(at.pup).addClass('zoomPup');


        outerDiv.css({
            'height': zoomImg.height() + 2 * zoomImg.css('border-width'),
            'width': zoomImg.width() + 2 * zoomImg.css('border-width')
        });
        zoomImg.parent('div').mouseleave(function(e){
            zoomPup.css('display','none')
        })

        zoomImg.parent('div').mouseenter(function(e){
            zoomScope.css('display', 'block');
        })

        zoomImg.parent('div').mousemove(function(e){
            zoomPup.css('display', 'inline-block');
            var left = e.pageX - halfZoomSize,
                top = e.pageY - halfZoomSize;

            var imgHeight = zoomImg.height(),
                imgWidth = zoomImg.width(),
                offset = zoomImg.offset();

            /*Check all directions*/
            if (top < offset.top){
                top = offset.top;
            }else if(top>(offset.top+imgHeight-sc.zoomSize)){
                top = offset.top+imgHeight-sc.zoomSize;
            }

            if (left<offset.left){
                left = offset.left;
            }else if(left>(offset.left+imgWidth- sc.zoomSize)){
                left = offset.left+imgWidth-sc.zoomSize;
            }

            /**********************/
//                console.log(e.pageX, e.pageY, offset, halfZoomSize, 'top left', top, left);
            var x = xCoord >= halfZoomSize ? xCoord : halfZoomSize, //Check top left
                y = yCoord >= halfZoomSize ? yCoord : halfZoomSize;
            x = x < imgWidth - halfZoomSize ? x : imgWidth - halfZoomSize;
            y = y < imgHeight - halfZoomSize ? y : imgHeight - halfZoomSize;

            console.log(left, top);
            console.log(offset)
            var newLeft = left-offset.left,
                newTop = top-offset.top;
            console.log('new', newLeft, newTop)
            zoomScope.css({
                top:    newTop,
                left:   newLeft
            });

            zoomPup.css({
                'background': 'url('+sc.src+') ' +
                    '-' + ((newLeft) * 3) + 'px ' +
                    '-' + ((newTop) * 3) + 'px',
                'background-size': imgWidth * 3 + 'px'
            })
        });
    }

    return {
        restrict: 'AE',
        scope: {
            src: '@src', /*Source Image*/
            zoomSize: '@zoom'
        },
        replace: true,
        template: '<div class="zoomPad"> <img src="{{src}}" class="zoomPad_img" />' +
            '<div class="zoomScope"></div>' +
            '</div>',
//            + '<div class="zoomPup"></div>',
        compile: function(){
            return {
                post: dLink
            }
        }
    }
})

app.directive('ngDice', function(){
   return function(sc, ele, att){
       var xAngle = 0, yAngle = 0;
       function rotateEvent(e){
           switch(e.keyCode)
           {
               case 65: // left
                   yAngle -= 90;
                   console.log(90)
                   break;
               case 87: // up
                   xAngle += 90;
                   break;
               case 68: // right
                   yAngle += 90;
                   break;
               case 83: // down
                   xAngle -= 90;
                   break;
           };
           document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
       }
       $(document).keyup(rotateEvent);
   }
})


app.directive('shuffleBlocks', function($timeout){

    return {
        link: function(sco,ele,att){
            // deba.push(sco,ele,att)
            var type = att.type,
                shufflePane = ele.children('.shuffle-pane'),
                contents = shufflePane.children('div'),
                index = 0, sizeRatio = 154,//determine the margin-top value of shuffle-pane
                itemCnt = contents.length,
                mode = 'down'; //inverse gets up
            if (itemCnt <= 1) return;
            /*Trigger fuction*/
            function triggerEvent(){
//                alert('triggered');
                switch(mode){
                    case 'up':
                        if (--index == 0) mode = 'down';
                        break;
                    case 'down':
                        if (++index >= itemCnt-1) mode = 'up';
                        break;
                }
                console.log('new margin-top' + -index * sizeRatio + 'px');
                shufflePane.css('margin-top', -index * sizeRatio + 'px');
            }
//            ele.bind('click', triggerEvent);
            /*Timeout*/
            setInterval(triggerEvent, 5000);
        }
    }
})
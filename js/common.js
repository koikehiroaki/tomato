console.log(1)


$('.preparation_list').css({
    position: 'relative',
    top: '-150px'
})

$('.preparation_list').parallaxFit({
    start: 0,
    end: 100,
    fromStyle: {
        opacity: '0',
    },
    toStyle: {
        opacity: '1',
        top: '0px'
    },
    easing: 'linear',
});



let i = 0
const itemSize = $('.preparation_list_item').length

$('.preparation_list_item').each(function () {
    const move = 200
    const start = i * 200

    //出し
    $(this).parallaxFit({
        start: start,
        end: start + move,
        fromStyle: {
            opacity: '0'
        },
        toStyle: {
            opacity: '1'
        },
        easing: 'linear',

        //消し
        motion1Start: itemSize * 200 + move,
        motion1End: itemSize * 200 + move + 200,
        motion1FromStyle: {
            opacity: '1'
        },
        motion1ToStyle: {
            opacity: '0'
        },
        motion1Easing: 'linear',
    });
    i++
})

$('.first_text').parallaxFit({
    start: 0,
    end: 90,
    fromStyle: {
        opacity: '1'
    },
    toStyle: {
        opacity: '0'
    },
    easing: 'linear',
});

$('.move_yazirusi').parallaxFit({
    start: 0,
    end: 90,
    fromStyle: {
        opacity: '1'
    },
    toStyle: {
        opacity: '0'
    },
    easing: 'linear',
});

$('.preparation').parallaxFit({
    start: 99,
    end: 100,
    fromStyle: {
        opacity: '0'
    },
    toStyle: {
        opacity: '1'
    },
    easing: 'linear',

    motion1Start: 1399,
    motion1End: 1400,
    motion1FromStyle: {
        opacity: '1'
    },
    motion1ToStyle: {
        opacity: '0'
    },
    motion1Easing: 'linear',
});


$('.do').parallaxFit({
    start: 1800,
    end: 1801,
    fromStyle: {
        opacity: '0'
    },
    toStyle: {
        opacity: '1'
    },
    easing: 'linear',
});



$('.step > *').css({
    opacity: 0
})


function stepMove(tag, stepStartPosition) {
    tag.find('> *').each(function (j) {
        const moveNum = 100
        const nextStart = stepStartPosition + stepMoveNum

        let motions = {
            start: stepStartPosition + j * moveNum,
            end: stepStartPosition + moveNum + j * moveNum,
            fromStyle: {
                opacity: '0'
            },
            toStyle: {
                opacity: '1'
            },
            easing: 'linear',
        }

        if (!~$(this).attr('class').indexOf('show')) {
            motions = Object.assign({}, motions, {
                motion1Start: nextStart,
                motion1End: nextStart + 100,
                motion1FromStyle: {
                    opacity: '1'
                },
                motion1ToStyle: {
                    opacity: '0'
                },
                motion1Easing: 'linear',
            })
        }
        $(this).parallaxFit(motions);
    })
}

const stepStart = 2000
const stepMoveNum = 1000
$('.step').each(function (i) {
    const start = i * stepMoveNum + stepStart
    console.log(start)
    stepMove($(this), start)
})


$('.sityuu').parallaxFit({
    start: 3800,
    end: 4551,
    fromStyle: {
        top: '-1920px',
        opacity: '0'
    },
    toStyle: {
        top: '-365px',
        opacity: '1'
    },
    easing: 'linear',
});

$('.shirushi').parallaxFit({
    start: 4200,
    end: 4751,
    fromStyle: {
        left: '1200px',
        opacity: '1'
    },
    toStyle: {
        left: '215px',
        opacity: '1'
    },
    easing: 'linear',

    motion1Start: 5000,
    motion1End: 5001,
    motion1FromStyle: {
        opacity: '1'
    },
    motion1ToStyle: {
        opacity: '0'
    },
    motion1Easing: 'linear',
});

$('.cut').parallaxFit({
    start: 4000,
    end: 5200,
    fromStyle: {
        left: '1400px',
        opacity: '1'
    },
    toStyle: {
        left: '-1400px',
        opacity: '1'
    },
    easing: 'linear',

    motion1Start: 5000,
    motion1End: 5001,
    motion1FromStyle: {
        opacity: '1'
    },
    motion1ToStyle: {
        opacity: '0'
    },
    motion1Easing: 'linear',
});


//$('.brown_do').parallaxFit({
//    start: 1700,
//    end: 1800,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//});
//
//$('.black_do').parallaxFit({
//    start: 1700,
//    end: 1800,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//});
//
//$('.small_nae').parallaxFit({
//    start: 2200,
//    end: 2500,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//
//    motion1Start: 2999,
//    motion1End: 3000,
//    motion1FromStyle: {
//        opacity: '1'
//    },
//    motion1ToStyle: {
//        opacity: '0'
//    },
//    motion1Easing: 'linear',
//});
////$('.midium_nae').parallaxFit({
//    start: 3000,
//    end: 3001,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//
//    motion1Start: 3899,
//    motion1End: 3900,
//    motion1FromStyle: {
//        opacity: '1'
//    },
//    motion1ToStyle: {
//        opacity: '0'
//    },
//    motion1Easing: 'linear',
//});
//
//$('.sityuu').parallaxFit({
//    start: 3500,
//    end: 3901,
//    fromStyle: {
//        top: '-1420px',
//        opacity: '0'
//    },
//    toStyle: {
//        top: '-710px',
//        opacity: '1'
//    },
//    easing: 'linear',
//});
//
//$('.big_nae').parallaxFit({
//    start: 3900,
//    end: 3901,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//
//    motion1Start: 4399,
//    motion1End: 4400,
//    motion1FromStyle: {
//        opacity: '1'
//    },
//    motion1ToStyle: {
//        opacity: '0'
//    },
//    motion1Easing: 'linear',
//});
//
//$('.flower_go_nae').parallaxFit({
//    start: 4400,
//    end: 4401,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//});
//
//$('.f1').parallaxFit({
//    start: 4400,
//    end: 4401,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//});
//
//$('.f2').parallaxFit({
//    start: 4500,
//    end: 4700,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//});
//
//$('.f3').parallaxFit({
//    start: 4700,
//    end: 4900,
//    fromStyle: {
//        opacity: '0'
//    },
//    toStyle: {
//        opacity: '1'
//    },
//    easing: 'linear',
//});

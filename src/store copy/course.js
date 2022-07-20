const defaultState={
    allCourses:[]
    // allCourses:[
    //     {
    //         id: 1,
    //         img: "https://p6-magic.byteimg.com/tos-cn-i-tokbwntzau/6294ff36b3ea38034abd01ac/021542e896d983d832b9813d762be890~tplv-tokbwntzau-perf:0:0:q75.webp?size=1920x1609&magic_type=image_jpeg",
    //         header: "2期|直播带货上手训练营",
    //         name: "点金手摄技狮",
    //         people: "625人购买",
    //         price: "98",
    //         low_price: "100",
    //         coursenum: "4"
    //       },
    //       {
    //         id: 2,
    //         img: "https://p6-magic.byteimg.com/tos-cn-i-tokbwntzau/6294ff36b3ea38034abd01ac/021542e896d983d832b9813d762be890~tplv-tokbwntzau-perf:0:0:q75.webp?size=1920x1609&magic_type=image_jpeg",
    //         header: "新手DOU+起号涨粉课",
    //         name: "Hello_程颖",
    //         people: "3267人购买",
    //         price: "28",
    //         low_price: "45",
    //         coursenum: "5"
    //       },
    //       {
    //         id: 3,
    //         img: "https://p6-magic.byteimg.com/tos-cn-i-tokbwntzau/6294ff36b3ea38034abd01ac/021542e896d983d832b9813d762be890~tplv-tokbwntzau-perf:0:0:q75.webp?size=1920x1609&magic_type=image_jpeg",
    //         header: "口播视频速成黄金6招",
    //         name: "游游",
    //         people: "330人购买",
    //         price: "40",
    //         low_price: "50",
    //         coursenum: "6"
    //       },
    //       {
    //         id: 4,
    //         img: "https://p6-magic.byteimg.com/tos-cn-i-tokbwntzau/6294ff36b3ea38034abd01ac/021542e896d983d832b9813d762be890~tplv-tokbwntzau-perf:0:0:q75.webp?size=1920x1609&magic_type=image_jpeg",
    //         header: "三步开通抖音橱窗",
    //         name: "思远（带货导师）",
    //         people: "2010人购买",
    //         price: "8",
    //         low_price: "30",
    //         coursenum: "3"
    //       }
    // ]
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'CHANGE_COURSE':
            return{
                ...state,
                course:action.data
            }
          default:
            return state
    }
    // return state;
}
export default reducer;
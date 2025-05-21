function fetchMenuInfo(){
    //서버로부터 전달받음
    return $.get("http://domain.com/api/menu", function(response){
        menu = response;
    })
}

//1. 사용자 정보 요청
fetchUser();

//2. 좌측 메뉴 정보 요청
let menu;
fetchMenuInfo(function(response){
    menu = response;
    
    //4. 페이지 UI 표시
    renderPageUI(menu);
})
//콜백함수

//3. 영상 본문 요청
fetchContents();

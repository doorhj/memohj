let memoInput = document.getElementById("memo-input");
let saveMemo = document.getElementById("save-memo");
let memoList = document.getElementById("memo-list");
let drop = document.getElementById("drop");

saveMemo.addEventListener("click", function () {
    let memo = memoInput.value;

    // innerText -> 정적인 글자 가져올 때!
    // value -> 동적인 글자 가져올 때!

    // memo에 아무것도 없는 게 아니라면
    if (drop.value == "서이" && memo != "") { // null : 공간도 없는 텅 빈 상태. emptyString : 공간은 있는데 아무것도 없는 상태
        let li = document.createElement("li");
        li.innerText = memo;
        li.style.cursor = "pointer";

        // 날짜 span 추가
        let span = document.createElement("span");
        span.innerText = new Date().toLocaleString(); // 현재 날짜/시간까지 가져오는 명령어

        // 날짜 span 스타일
        span.style.float = "right";
        span.style.fontSize = "0.9em";
        span.style.marginRight = "3px";
        span.style.color = "#707567"
        span.style.fontWeight = "normal";  

        // li 태그에 날짜 span 추가
        li.appendChild(span);

        // li 태그 스타일 지정
        li.style.color = "#85b12d";
        li.style.fontWeight = "bold";
        li.style.margin = "3px 0px";
        memoList.appendChild(li); //appendChild -> 부모.appendChild(새로만든태그) = 부모요소에 (새로만든태그) 자식요소로 추가

        

        // li 태그를 삭제하고 싶다면?
        // 부모노드.removechild();
        // 부모노드 접근 명령어 : parentNode
        
        li.addEventListener("click", function () {
            let ok = confirm("댓글을 삭제하시겠습니까?");
            if (ok == true) {
                li.parentNode.removeChild(li);
            }
        });

        // textarea 글씨 지우기
        memoInput.value = "";
    }
    // 이웃 댓글일 때 
    else if (drop.value == "이웃" && memo != "") {
        let li = document.createElement("li");
        li.innerText = memo;

        // 날짜 가져오기
        let span = document.createElement("span");
        span.innerText = new Date().toLocaleString();

        span.style.float = "right";
        span.style.fontSize = "0.9em";
        span.style.marginRight = "3px";
        span.style.color = "#707567"
        span.style.fontWeight = "normal";

        // li에 span 추가
        li.appendChild(span);

        li.style.color = "#85b12d";
        li.style.margin = "3px 0px";
        memoList.appendChild(li);

        // 댓글 삭제
        li.addEventListener("click", function () {
            let ok = confirm("댓글을 삭제하시겠습니까?");
            if (ok == true) {
                li.parentNode.removeChild(li);
            }
        });

        memoInput.value = "";
    }
    // 방문자 댓글일 때
    else if (drop.value == "방문자" && memo != "") {
        let li = document.createElement("li");
        li.innerText = memo;

        let span = document.createElement("span");
        span.innerText = new Date().toLocaleString();

        span.style.float = "right";
        span.style.fontSize = "0.9em";
        span.style.marginRight = "3px";
        span.style.color = "#707567"
        span.style.fontWeight = "normal";

        li.appendChild(span);

        li.style.color = "#707567";
        li.style.margin = "3px 0px";
        memoList.appendChild(li);

        li.addEventListener("click", function () {
            let ok = confirm("댓글을 삭제하시겠습니까?");
            if (ok == true) {
                li.parentNode.removeChild(li);
            }
        });

        memoInput.value = "";
    }


    let checks = document.querySelectorAll("input");
    let li = document.querySelectorAll("li");
    let span = document.querySelectorAll("span");

    for(let i = 0; i < checks.length; i++){
        checks[i].addEventListener("click", function(){

            console.log(checks[i].value);
            if (checks[i].value == "on"){
                li[i].style.textDecoration = "line-through";
                span[i].style.textDecoration = "line-through";
            }else{
                li[i].style.textDecoration = "none";
                span[i].style.textDecoration = "none";    
            }
        });
    }
});
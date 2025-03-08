      document.getElementById("btnMove").addEventListener("mouseover", function() {
            let x = Math.random() * (window.innerWidth - this.clientWidth);
            let y = Math.random() * (window.innerHeight - this.clientHeight);
            this.style.position = "absolute";
            this.style.left = x + "px";
            this.style.top = y + "px";
        });

        document.getElementById("btnClick").addEventListener("click", function() {
            document.getElementById("popup").style.display = "block";
            document.getElementById("mainContainer").style.display = "none";
        });

        function showMessage() {
            let name = document.getElementById("inputName").value.trim().toLowerCase();
            let messages = {
               "Thu Huyền": "Chúc chị sớm có bồ, mau giàu, làm việc nhớ giữ sức khỏe, say no with stress. Làm việc thì không cãi sếp, không đánh nhau với sếp (trừ khi thấy đánh xong có thể nhảy job ngon hơn thì cứ mạnh dạn 😊).",
                "Như Hằng": "Chúc chị sớm có bồ, nếu có rồi thì chúc tình yêu bền vững như deadline, càng gần càng rộn ràng. Tiền đầy ví, công việc hanh thông, cơ hội tới tấp như quảng cáo trên YouTube.",
                "Vy Vương": "Chúc chị có công việc ổn định, 8386 thuận lợi, đặc biệt là chúc quen được Tuấn Long. Mà nếu vài năm nữa hay năm nay gửi thiệp cưới thì vui à nha, đừng để dân tình hóng dài cổ! 😊",
                "Phương Thùy": "Chúc chị buôn may bán đắt, kinh doanh phát đạt, đường đời rộng mở, sự nghiệp thăng hoa như giá đất. Chúc anh Tư và chị Thùy trăm năm hạnh phúc, mà nhớ nghía sẵn mẫu thiệp cưới đi nghen, em đợi quà cưới nha =)))",
                "Khánh Vy": "Chúc chị sớm tìm được người tình trong mộng, hoặc nếu có rồi thì giữ cho chặt, đừng để thất thoát như tiền trong ví cuối tháng.",
                "Thu Hậu": "Chúc chị cùng tên và cũng là cô giáo lúc nào cũng tràn đầy năng lượng, lên lớp như MC, học trò nghe giảng không ngủ gật, kiểm tra không xin hoãn, bài tập giao đến đâu hoàn thành đến đó.",
                "Hồng Ngọc": "Chúc chị năm nay phát tài, tình duyên như ý, công việc suôn sẻ, sếp hiền như Phật, lương tăng vèo vèo.",
            };
            
            let matchedKey = Object.keys(messages).find(key => name.includes(key.toLowerCase()));
            let messageText = matchedKey ? messages[matchedKey] : "Bạn không thuộc hội chị em của nhóm Vô Tri rồi, bạn là ai từ đâu đến khai mau. Nếu là đom đóm thì vẫn có cơ hội quay đầu liên hệ ngay Zalo: 0786008420 Mr DHau để làm việc nhé ";
            
            document.getElementById("messageText").innerText = messageText;
            document.getElementById("messageBox").style.display = "block";
            document.getElementById("popup").style.display = "none";
        }

        function closeMessage() {
            document.getElementById("messageBox").style.display = "none";
            document.getElementById("mainContainer").style.display = "block";
        }

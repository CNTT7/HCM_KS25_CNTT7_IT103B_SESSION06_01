let choice;
let orderCode = "";
let isVip = false;

do {
    let menuText = `
---------- QUẢN LÝ BÁN LẺ PHỤ KIỆN GYM ----------------
1. Nhập và chuẩn hóa mã đơn hàng
2. Tính tiền và in hóa đơn phụ kiện
3. Thoát chương trình
Vui lòng chọn (1-3):`;
    choice = parseInt(prompt(menuText));
    switch (choice) {
        case 1:
            let userInput = prompt("Nhap ma don hang:");
            orderCode = userInput.trim().toUpperCase();
            if (orderCode.length < 8) {
                console.log("Loi: Ma don hang khong hop le (phai tu 8 ky tu tro len).");
                orderCode = ""; 
            } else {
                console.log("Da ghi nhan ma don hang: " + orderCode);
            }    
            break;

        case 2:
            isVip = orderCode.startsWith("VIP");
            let subTotal = 0;
            let receiptDetails = "";
            let startIndex = 0;

            for (let i = 0; i <= orderCode.length; i++) {
                if (i === orderCode.length || orderCode[i] === "-") {
                    let item = orderCode.slice(startIndex, i);
                    
                    if (item === "SHAKER") {
                        subTotal += 120000;
                        receiptDetails += "SHAKER" + "120.000 VND".padStart(34) + "\n";
                    } else if (item === "GLOVES") {
                        subTotal += 180000;
                        receiptDetails += "GLOVES" + "180.000 VND".padStart(34) + "\n";
                    } else if (item === "STRAP") {
                        subTotal += 150000;
                        receiptDetails += "STRAP" + "150.000 VND".padStart(35) + "\n";
                    }

                    startIndex = i + 1;
                }
            }

            let discount = 0;
            if (isVip) {
                discount = subTotal * 0.1;
            }
            let finalAmount = subTotal - discount;

            let border = "-".repeat(40);

            console.log(border);
            console.log("HOA DON BAN LE PHU KIEN".padStart(31));
            console.log(border);
            console.log("Ten phu kien" + "Gia tien".padStart(28));
            console.log(border);
            
            if (receiptDetails !== "") {
                console.log(receiptDetails.trim());
            }
            
            console.log(border);
            console.log("Tong tien:" + (subTotal + " VND").padStart(30));
            
            if (isVip) {
                console.log("Uu dai VIP (-10%):" + (discount + " VND").padStart(22));
            }
            
            console.log("THANH TOAN:" + (finalAmount + " VND").padStart(29));
            console.log(border);

            break;

        case 3:
            console.log("Ban da thoat chuong trinh. Chuc mot ngay tot lanh!");
            break;
        default:
            console.log("Lua chon khong hop le! Vui long chi chon 1, 2 hoac 3.");
            break;
    }

} while (choice !== 3);
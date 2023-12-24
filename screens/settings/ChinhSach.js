import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ChinhSach = ({navigation}) => {
    return(
      <View style={styles.Content}>
        <Text style={styles.H1}>Chính sách bảo mật</Text>
        <Text style={styles.H2}>Chính sách bảo mật ứng dụng và trang web</Text>
        <Text>Cập nhật lần cuối: Tháng 2, ngày 1, 2022</Text>

        <Text>Nội dung
        1. Tổng quan
        2. Chính sách Bảo mật này bao gồm những gì?
        3. Chúng tôi thu thập thông tin cá nhân nào từ bạn?
        4. Cookie
        5. Chúng tôi sử dụng Thông tin Cá nhân được thu thập từ bạn như thế nào?
        6. Chúng tôi chia sẻ Thông tin Cá nhân của bạn với ai?
        7. Cơ sở pháp lý của chúng tôi dùng để xử lý Thông tin Cá nhân
        8. Thông tin cá nhân của bạn được lưu trữ và xử lý ở đâu?
        9. Chúng tôi giữ Thông tin Cá nhân của bạn trong bao lâu?
        10. Làm cách nào để chúng tôi bảo mật Thông tin Cá nhân của bạn?
        11. Còn quyền riêng tư của trẻ em thì thế nào?
        12. Những thay đổi cho Chính sách Bảo mật này
        13. Quyền của bạn
        14. Liên hệ với chúng tôi, thêm câu hỏi và cách khiếu nại
        </Text>
        <Text style={styles.H2}>1. Tổng quan</Text>
        <Text>Đây là Chính sách bảo mật trang web và ứng dụng ("Chính sách bảo mật") của chi nhánh đăng ký tại Vương quốc Anh của Cookpad Inc., một công ty đăng ký tại WeWork Ocean Gate Minatomirai, 3-7-1 Yokohama-shi Nishi Ward Minatomirai, Kanagawa, Nhật Bản ("Cookpad") và chúng tôi điều khiển dữ liệu liên quan đến Thông tin cá nhân (như được định nghĩa bên dưới) mà chúng tôi thu thập từ bạn. Nó bao gồm thông tin Cookpad thu thập từ người dùng và khách truy cập trang web chính thức của chúng tôi ("Trang web" ) và ứng dụng di động chính thức ("Ứng dụng").

        Khi chúng tôi sử dụng các cụm từ "chúng tôi", "chúng tôi" hoặc "của chúng tôi", chúng tôi muốn chỉ Cookpad và "Nhóm của chúng tôi" có nghĩa là các thực thể đang quản lý, được quản lý bởi hoặc dưới sự quản lý chung với Cookpad. Tìm hiểu thêm về Tập Đoàn của chúng tôi tại đây.

        Bằng cách truy cập Trang web hoặc Ứng dụng của chúng tôi, bạn xác nhận rằng bạn đã đọc và hiểu toàn bộ Chính sách Bảo mật này.

        Bạn có các quyền khác nhau liên quan đến việc chúng tôi sử dụng Thông tin Cá nhân của bạn như được nêu trong phần 'Quyền của bạn' bên dưới. Hai trong số các quyền cơ bản cần lưu ý là bạn có thể:

        yêu cầu chúng tôi ngừng sử dụng Thông tin cá nhân của bạn để tiếp thị trực tiếp qua email hoặc thông báo nhảy. Nếu bạn thực hiện quyền này, chúng tôi sẽ ngừng sử dụng Thông tin cá nhân của bạn về vấn đề này; và
        yêu cầu chúng tôi xem xét bất kỳ phản đối hợp lệ nào của bạn về việc chúng tôi sử dụng Thông tin Cá nhân của bạn tại nơi chúng tôi xử lý Thông tin Cá nhân của bạn trên cơ sở của chúng tôi, hoặc của bên thứ ba, các lợi ích hợp pháp.
        </Text>
        <Text style={styles.H2}>2. Chính sách bảo mật này bao gồm những gì?</Text>
        <Text>
            Chúng tôi xử lý một số thông tin nhất định khi bạn truy cập hoặc khi bạn sử dụng dịch vụ của chúng tôi do Trang web hoặc Ứng dụng của chúng tôi cung cấp (“ Dịch vụ Cookpad ”). Một số thông tin đó có thể khiến bạn được nhận ra (“ Thông tin cá nhân ”).

            Chính sách bảo mật này giải thích cách chúng tôi thu thập, lưu trữ và sử dụng Thông tin cá nhân của bạn khi bạn truy cập hoặc sử dụng Trang web và ứng dụng của chúng tôi. Nó cũng mô tả các loại Thông tin Cá nhân mà chúng tôi thu thập, cách chúng tôi sử dụng Thông tin Cá nhân này để đảm bảo chúng tôi cung cấp Dịch vụ Cookpad phù hợp và kịp thời cho bạn và cải thiện trải nghiệm của bạn về Dịch vụ Cookpad.
        </Text>
        <Text style={styles.H2}>3. Chúng tôi thu thập thông tin cá nhân nào từ bạn?</Text>
        <Text>Thông tin bạn gửi cho chúng tôi	Truy cập Trang web của chúng tôi hoặc sử dụng Ứng dụng của chúng tôi mà không cần đăng ký	
            Thông tin Kỹ thuật (xem bên dưới)
            Nếu bạn đăng ký với chúng tôi qua Trang web hoặc Ứng dụng của chúng tôi	
            Tên người dùng, địa chỉ email và mật khẩu
            Công thức hoặc sở thích về món ăn mà bạn cho biết thông qua việc bạn sử dụng Trang web hoặc Ứng dụng.
            Nếu bạn đăng nhập qua mạng xã hội như Facebook hoặc Google	
            Nếu bạn đăng nhập vào Trang web hoặc Ứng dụng của chúng tôi qua Facebook, chúng tôi sẽ thu thập ID Facebook, địa chỉ email, ảnh đại diện của bạn và bạn có tùy chọn cho phép chúng tôi thu thập tên của những người bạn trên Facebook của bạn. Điều này chỉ giới hạn đối với những người bạn trên Facebook sử dụng Dịch vụ Cookpad và đã cho phép Cookpad xem danh sách bạn bè trên Facebook của họ.
            Nếu bạn đăng nhập vào Trang web hoặc Ứng dụng của chúng tôi qua Google, chúng tôi sẽ thu thập ID Google, tên, ảnh đại diện và địa chỉ email của bạn.
            Nếu bạn hoàn tất trang bếp cá nhân của mình	
            Thông tin Cá nhân mà bạn cung cấp bao gồm ảnh, tên người dùng, vị trí và tiểu sử của bạn.
            Nếu bạn muốn chúng tôi đồng bộ hóa ảnh trên thiết bị của bạn về những hình ảnh liên quan đến món ăn	
            Dịch vụ Cookpad có thể truy cập và thu thập hình ảnh được lưu trữ trong bộ nhớ ảnh của thiết bị của bạn. Bằng cách tải các hình ảnh thu nhỏ lên Dịch vụ Cookpad, Dịch vụ Cookpad sử dụng chức năng nhận dạng hình ảnh để cố gắng xác định các ảnh có chứa thức ăn("Ảnh món ăn"). Hình thu nhỏ được tải lên có thể chứa thông tin về bạn, chẳng hạn như khuôn mặt của bạn; tuy nhiên, chức năng nhận dạng hình ảnh không thực hiện nhận diện khuôn mặt hoặc cố gắng xác định bất kỳ cá nhân nào trong hình ảnh. Sau khi hình thu nhỏ được phân loại, hình ảnh gốc của những hình ảnh được xác định là Ảnh món ăn được tải lên và lưu trữ trong máy chủ của chúng tôi. Chúng tôi tự động xóa mọi hình thu nhỏ khỏi máy chủ của chúng tôi mà chức năng nhận dạng hình ảnh không xác định là Ảnh món ăn hoặc hình ảnh gốc mà bạn đã xóa thủ công.
        
            Nếu bạn sử dụng Dịch vụ Premium
        
            Nếu bạn đăng ký Dịch vụ Premium từ ứng dụng của chúng tôi, bạn sẽ cần gửi thông tin thanh toán của mình tới Google Inc. và / hoặc Apple Inc. và thông tin đó sẽ được họ sử dụng và quản lý theo chính sách bảo mật của riêng họ bên dưới.

             Google: https://privacy.google.com/

            Apple: https://www.apple.com/legal/privacy/en-ww/

            Nếu bạn đăng công thức hoặc bình luận	
            Bất kỳ Thông tin Cá nhân nào được bao gồm trong bất kỳ công thức nấu ăn, bình luận hoặc nội dung khác nào của bạn gửi sẽ được Cookpad thu thập và xử lý.
            Nếu bạn sử dụng chức năng nhắn tin	
            Thông tin liên hệ của người khác có thể được thu thập, qua danh bạ điện thoại của bạn nếu bạn chọn "Chọn bạn bè từ điện thoại của bạn" hoặc từ Facebook nếu bạn chọn "Mời bạn bè của bạn qua Facebook".
            Nếu bạn chọn "Mời bạn bè qua e-mail", chúng tôi sẽ yêu cầu địa chỉ email, vì vậy chúng tôi có thể xác định xem người kia có phải là người dùng đã đăng ký và kết nối bạn trên Dịch vụ Cookpad hay không.
            Bất kỳ Thông tin cá nhân nào chứa trong thư sẽ được Cookpad xử lý.
            Bất kỳ thư nào được báo cáo là lạm dụng hoặc có hại sẽ được chuyển đến nhân viên của chúng tôi để đánh giá báo cáo.
            Nếu bạn tham gia vào các cuộc phỏng vấn người dùng, khảo sát hoặc nhóm sử dụng bản thử nghiệm beta	
            Màn hình của bạn sẽ được ghi lại khi bạn đang sử dụng phiên bản thử nghiệm của Ứng dụng. Thao tác này sẽ chỉ ghi lại màn hình của bạn trong khi bạn đang sử dụng ứng dụng Cookpad Beta.
            Chúng tôi sẽ thu thập phản hồi từ bạn về việc bạn sử dụng Ứng dụng và điều này có thể bao gồm Thông tin Cá nhân.
            Nếu bạn giúp chúng tôi bằng cách hoàn thành một cuộc phỏng vấn người dùng thì chúng tôi có thể thu thập Thông tin Cá nhân như là một phần của quá trình này mà bạn tình nguyện tham gia cuộc phỏng vấn.
            Nếu bạn tham gia một cuộc thi	
            Nếu bạn thắng cuộc thi, chúng tôi có thể cần địa chỉ của bạn để gửi cho bạn giải thưởng.
            Nếu bạn tham dự sự kiện Cookpad	
            Nếu bạn tham dự một sự kiện họp mặt của Cookpad, như một phần của đăng ký cho sự kiện, chúng tôi sẽ thu thập một hoặc nhiều thông tin của bạn:
            Tên
            Địa chỉ Email
            ID người dùng trên Cookpad
            Số Điện thoại
            Bạn có thể được chụp ảnh nếu bạn tham dự sự kiện Cookpad.
            Nếu bạn liên hệ với chúng tôi	
            Tên, số điện thoại hoặc địa chỉ email và mọi Thông tin Cá nhân khác mà bạn cung cấp cho chúng tôi trong quá trình liên lạc của chúng tôi.
            Thông tin được Thu thập Tự động	Thông tin Kỹ thuật và Thống kê	
            Địa chỉ giao thức internet (IP) được sử dụng để kết nối máy tính hoặc thiết bị của bạn với internet và vị trí địa lý được xác định từ đó;
            Thông tin đăng nhập, loại và phiên bản trình duyệt, cài đặt múi giờ, loại trình cắm và trình duyệt của trình duyệt, thông tin thiết bị như hệ điều hành và nền tảng (nếu có thể áp dụng cho thiết bị bạn đang sử dụng);
            Thông tin về lượt truy cập của bạn vào Trang web của chúng tôi, đường dẫn bạn đi qua và từ Trang web của chúng tôi (bao gồm ngày và giờ); các trang bạn đã xem hoặc tìm kiếm; thời gian phản hồi trang, lỗi tải xuống, thời lượng truy cập vào một số trang nhất định, thông tin tương tác trang (chẳng hạn như cuộn, nhấp chuột và di chuột qua) và các phương thức được sử dụng để duyệt qua trang; và
            Trong trường hợp Ứng dụng của chúng tôi, thông tin về việc bạn sử dụng Ứng dụng của chúng tôi và quốc gia bạn được kết nối.
            Các loại Thông tin Cá nhân Đặc biệt		
            Một số Thông tin Cá nhân mà bạn gửi cho chúng tôi về bạn có thể thuộc danh mục Thông tin Cá nhân đặc biệt. Các loại Thông tin Cá nhân đặc biệt bao gồm, ví dụ: thông tin liên quan đến dị ứng (ví dụ: công thức không chứa gluten) hoặc tôn giáo (ví dụ: các bữa ăn kosher). Chúng tôi xử lý các danh mục Thông tin Cá nhân đặc biệt một cách cẩn thận hơn.
        </Text>
        <Text style={styles.H2}>4. Cookie</Text>
        
        <Text>
            Chúng tôi và các đối tác bên thứ ba của chúng tôi, chẳng hạn như mạng quảng cáo, tiện ích truyền thông xã hội và nhà cung cấp phân tích, sử dụng cookie và các công nghệ tương tự để cung cấp, hỗ trợ và cải thiện Dịch vụ Cookpad và từng ứng dụng được nêu và được mô tả trong Chính sách bảo mật này. Các đối tác của chúng tôi cũng có thể thu thập thông tin về các hoạt động trực tuyến của bạn theo thời gian, trên các thiết bị khác và trên các trang web hoặc ứng dụng khác. Các bên thứ ba đó có thể có chính sách bảo mật riêng của họ về việc sử dụng Thông tin cá nhân của bạn. Để tắt cookie, bạn cần thay đổi cài đặt trình duyệt của mình. Để biết thêm thông tin về cách thực hiện việc này, vui lòng truy cập http://www.aboutcookies.org/. Xin lưu ý rằng nếu bạn chọn tắt cookie trên thiết bị của mình, điều đó có nghĩa là một số chức năng nhất định của Trang web và ứng dụng của chúng tôi không thể hoạt động bình thường và khả năng sử dụng của Dịch vụ Cookpad sẽ bị ảnh hưởng.

            Đọc Chính sách Cookie của chúng tôi để tìm hiểu thêm.
        </Text>
        <Text style={styles.H2}>5. Chúng tôi sử dụng Thông tin Cá nhân được thu thập từ bạn như thế nào?</Text>
        <Text>
            Chúng tôi hoặc các nhà xử lý dữ liệu bên thứ ba đại diện cho chúng tôi, sử dụng Thông tin Cá nhân mà chúng tôi thu thập từ bạn theo các cách sau: Cung cấp, phát triển, duy trì, chỉnh sửa và cải thiện Dịch vụ Cookpad và bất kỳ dịch vụ nào khác chúng tôi hoạt động

            Ví dụ: chúng tôi có thể sử dụng Thông tin cá nhân của bạn để:

            xác minh danh tính của bạn;
            cho phép truy cập vào Trang web và Ứng dụng;
            tạo điều kiện truy cập và sửa đổi thông tin đăng ký;
            lưu trữ thông tin về các tuỳ chọn;
            tùy chỉnh nội dung trên Trang web và Ứng dụng để cung cấp trải nghiệm người dùng phù hợp, phong phú và cải tiến hơn cho bạn, bao gồm quảng cáo trực tuyến được hiển thị trên Dịch vụ Cookpad;
            cho phép người dùng tham gia vào các cuộc thi và chương trình ưu đãi;
            truyền các thông báo liên quan đến Dịch vụ Cookpad và cung cấp các giải thưởng và sản phẩm cho bạn; và
            đảm bảo tính bảo mật của Trang web và Ứng dụng.
            Để tiến hành phân tích và hoạt động tiếp thị

            Ví dụ: chúng tôi có thể sử dụng Thông tin cá nhân của bạn để:

            theo dõi số lượng người dùng sử dụng Trang web và Ứng dụng ở một số vị trí địa lý nhất định;
            giám sát việc sử dụng Dịch vụ Cookpad để hiểu cách sử dụng dịch vụ này và hiểu cách chúng tôi có thể cải thiện Dịch vụ Cookpad;
            chọn người tham gia phỏng vấn người dùng hoặc thử nghiệm do chúng tôi hoặc các đối tác tin cậy khác thực hiện; hoặc
            cung cấp cho nhà quảng cáo, nhà cung cấp thông tin và nhà cung cấp dịch vụ thông tin về các loại quảng cáo và thông tin có thể hoặc sẽ được hiển thị hoặc cung cấp cho bạn thông qua Dịch vụ Cookpad.
            Để bảo vệ bạn, chúng tôi và những người khác

            Ví dụ: chúng tôi có thể sử dụng Thông tin cá nhân của bạn để:

            quảng bá an toàn và bảo mật trên Dịch vụ Cookpad để bảo vệ bạn và Thông tin Cá nhân của bạn;
            từ chối việc sử dụng Dịch vụ Cookpad cho những người dùng đã đăng ký trước đó có: (a) không thanh toán nhanh chóng; (b) gây thiệt hại cho Cookpad, người dùng khác hoặc bên thứ ba; hoặc (c) vi phạm điều khoản sử dụng của chúng tôi ("Điều khoản Sử dụng") hoặc sử dụng Dịch vụ Cookpad trong một cách gian lận hoặc không đúng cách; hoặc
            bảo vệ người dùng Dịch vụ Cookpad và Nhóm của chúng tôi chống lại các mối đe dọa như gian lận hoặc tấn công mạng.
            Để tiến hành tiếp thị trực tiếp và quảng cáo Dịch vụ Cookpad.

            Ví dụ: chúng tôi có thể sử dụng Thông tin cá nhân của bạn để:

            thỉnh thoảng liên lạc với bạn để gửi những thông tin mà chúng tôi cho rằng bạn có thể quan tâm, trừ khi bạn yêu cầu chúng tôi không làm; hoặc
            quảng cáo hoặc quảng bá các chức năng, sự kiện hoặc tin tức mới bằng cách gửi thông báo hoặc bản tin e-mail cho bạn.
            Tất cả các bản tin email đều bao gồm tùy chọn hủy đăng ký. Ngoại trừ các thông báo và thông tin liên lạc về hoạt động của Dịch vụ Cookpad, bạn có thể chọn không nhận email và các thông báo đẩy từ chúng tôi bất kỳ lúc nào bằng cách sử dụng bảng cài đặt thông báo trong tài khoản của bạn trên trang web. Chúng tôi sẽ không cung cấp địa chỉ email của bạn cho bất kỳ bên thứ ba nào cho mục đích tiếp thị.

            Để liên lạc với bạn

            Chúng tôi có thể sử dụng chi tiết liên hệ của bạn để liên lạc với bạn để trả lời các truy vấn bạn đã nêu ra với chúng tôi.

            Vì các mục đích khác

            cho báo cáo nội bộ, quản trị doanh nghiệp, đảm bảo bảo hiểm đầy đủ cho doanh nghiệp của chúng tôi, đảm bảo an ninh cho các cơ sở, nghiên cứu và phát triển của công ty và để xác định và thực hiện hiệu quả kinh doanh;
            tuân thủ mọi quy trình, luật và quy định áp dụng cho chúng tôi - điều này có thể bao gồm nơi chúng tôi xem xét hợp lý vì lợi ích hợp pháp của chúng tôi hoặc lợi ích hợp pháp của người khác, cũng như nơi chúng tôi được yêu cầu làm như vậy;
            để thiết lập, thực hiện hoặc bảo vệ quyền hợp pháp của chúng tôi - điều này có thể bao gồm nơi chúng tôi xem xét hợp lý đó là lợi ích hợp pháp của chúng tôi hoặc lợi ích hợp pháp của người khác, cũng như nơi chúng tôi được yêu cầu làm như vậy;
            nếu bạn liên hệ với chúng tôi trên phương tiện truyền thông xã hội, để theo dõi tương tác của bạn với chúng tôi và thương hiệu của chúng tôi trực tuyến, nơi chúng tôi có quyền lợi hợp pháp để thực hiện nghiên cứu thị trường và lập kế hoạch cho các chiến dịch tiếp thị trong tương lai; hoặc
            nếu chúng tôi sử dụng ảnh hoặc cảnh quay video của bạn từ một sự kiện, để khuếch đại sự kiện cho đối tượng rộng hơn và cho mục đích trình bày nội bộ, nơi chúng tôi có lợi ích hợp pháp cho mục đích tiếp thị và phát triển kinh doanh hoặc nơi bạn đồng ý.
            Dữ liệu ẩn danh

            Chúng tôi sẽ ẩn danh hoặc tổng hợp dữ liệu được thu thập thông qua Dịch vụ Cookpad và sử dụng và tiết lộ dữ liệu đó cho bất kỳ mục đích kinh doanh nào. Tuy nhiên, không một cá nhân nào sẽ được nhận dạng từ các chi tiết ẩn danh mà chúng tôi tiết lộ cho các mục đích này.
        </Text>
        <Text style={styles.H2}>6. Chúng tôi chia sẻ Thông tin Cá nhân của bạn với ai?</Text>
        <Text>
            Nhóm công ty: Chúng tôi chia sẻ Thông tin Cá nhân của bạn trong Nhóm của chúng tôi để cung cấp cho bạn Dịch vụ Cookpad, thông tin hoặc thực hiện các hoạt động xử lý khác như được nêu ở trên và, nơi chúng tôi có quyền lợi hợp pháp làm như vậy cho các mục đích quản trị nội bộ (ví dụ, chiến lược doanh nghiệp, tuân thủ, kiểm toán và theo dõi hoặc nghiên cứu và phát triển). Tìm hiểu thêm về Tập Đoàn của chúng tôi tại đây.

            Người dùng Cookpad khác: Chúng tôi chia sẻ thông tin với những người dùng khác của Dịch vụ Cookpad. Ví dụ: nếu bạn gửi tin nhắn cho người dùng đã đăng ký khác thông qua Dịch vụ Cookpad, chúng tôi sẽ chia sẻ thông tin trong các tin nhắn với họ.

            Người dùng thử nghiệm beta: Nếu bạn tham gia một trong các nhóm thử nghiệm phiên bản beta của chúng tôi thì thông tin của bạn có thể được chia sẻ với các thành viên khác của nhóm thử nghiệm để cho phép giao tiếp và nâng cao các tính năng đang được thử nghiệm. Những người trong nhóm thử nghiệm beta của chúng tôi có thể rời khỏi các nhóm này bất kỳ lúc nào.

            Đối tác bàn phím đáng tin cậy: Chúng tôi chỉ có thể chia sẻ Thông tin cá nhân của bạn với các đối tác và đại lý đáng tin cậy sau nếu họ cần thông tin đó để thực hiện nghĩa vụ hoặc dịch vụ cụ thể cho chúng tôi. Bạn có thể yêu cầu bản sao danh sách các đối tác này bằng cách sử dụng chi tiết liên hệ tại đây

            Đối tác tin cậy, nhà cung cấp, nhà thầu phụ và đại lý hợp tác với chúng tôi để cung cấp cho bạn Dịch vụ và quảng cáo Cookpad, chẳng hạn như nhà cung cấp dịch vụ CNTT, nhà gửi thư và công ty lưu trữ dữ liệu của chúng tôi.
            Đối tác tin cậy, nhà cung cấp, nhà thầu phụ và đại lý hợp tác với chúng tôi để cung cấp Trang web và Ứng dụng hoặc thu thập, lưu trữ hoặc xử lý thông tin của bạn cho chúng tôi.
            Nhà quảng cáo và mạng quảng cáo yêu cầu thông tin để chọn và phân phối quảng cáo có liên quan cho bạn và những người khác. Chúng tôi không tiết lộ Thông tin cá nhân cho nhà quảng cáo của chúng tôi, nhưng chúng tôi có thể cung cấp cho họ thông tin tổng hợp về người dùng của chúng tôi (ví dụ: chúng tôi có thể thông báo cho họ rằng 500 người dùng từ Pháp đã nhấp vào quảng cáo của họ vào bất kỳ ngày cụ thể nào). Chúng tôi cũng có thể sử dụng thông tin tổng hợp như vậy để giúp nhà quảng cáo tiếp cận loại đối tượng họ muốn nhắm mục tiêu. Chúng tôi có thể sử dụng Thông tin cá nhân mà chúng tôi đã thu thập từ bạn để cho phép chúng tôi tuân thủ mong muốn của nhà quảng cáo bằng cách hiển thị quảng cáo của họ cho đối tượng mục tiêu đó. Đọc Chính sách cookie của chúng tôi để tìm hiểu thêm về việc chọn không tham gia quảng cáo được cá nhân hóa.
            Nhà cung cấp công cụ tìm kiếm và phân tích cũng như các tổ chức nghiên cứu và nhà cung cấp, giúp chúng tôi cải tiến và tối ưu hóa cũng như hiểu biết về việc sử dụng và hành vi trên Trang web, Ứng dụng và Dịch vụ Cookpad. Ví dụ: chúng tôi có thể sử dụng Google Analytics để thu thập và xử lý thông tin về cách sử dụng Dịch vụ bàn di chuột.
            Các bên thứ ba đáng tin cậy khác, nhưng chỉ với sự đồng ý trước của bạn hoặc nơi bạn tự nguyện chọn làm như vậy; ví dụ: Dịch vụ Cookpad có thể cho phép bạn chia sẻ thông tin, bao gồm Thông tin cá nhân, với các trang web mạng xã hội, chẳng hạn như Facebook.
            Các tiết lộ khác: Chúng tôi cũng có thể chia sẻ Thông tin Cá nhân của bạn với các tổ chức hoặc cá nhân khác:

            Nếu đó là lợi ích hợp pháp của chúng tôi để làm như vậy để chạy, phát triển và phát triển kinh doanh của chúng tôi; đặc biệt:
            nếu chúng tôi bán hoặc mua bất kỳ doanh nghiệp hoặc tài sản nào, chúng tôi có thể tiết lộ Thông tin Cá nhân của bạn cho người mua hoặc người bán tiềm năng của doanh nghiệp hoặc tài sản đó; hoặc
            nếu tất cả hoặc toàn bộ tài sản của chúng tôi được bên thứ ba mua lại, trong trường hợp đó Thông tin Cá nhân do chúng tôi nắm giữ sẽ là một trong các tài sản được chuyển giao.
            Để đáp ứng mọi luật, quy định, quy trình pháp lý hiện hành hoặc yêu cầu có thể thực thi của chính phủ.
            Để thực thi các điều khoản và điều kiện pháp lý hiện hành hoặc các quyền pháp lý khác của chúng tôi, bao gồm cả việc điều tra các vi phạm tiềm năng về Điều khoản Sử dụng của chúng tôi.
            Để phát hiện, ngăn chặn hoặc nói cách khác là giải quyết các vấn đề về gian lận, bảo mật hoặc kỹ thuật.
            Để bảo vệ chống lại hoặc ngăn chặn tổn hại đến quyền, tài sản hoặc sự an toàn của Nhóm của chúng tôi, người dùng của chúng tôi hoặc công chúng theo yêu cầu hoặc được pháp luật cho phép.

            Bất kỳ bên thứ ba nào như vậy bị hạn chế (theo luật và theo hợp đồng) về khả năng sử dụng Thông tin cá nhân của bạn cho bất kỳ mục đích nào khác ngoài việc thực hiện các nghĩa vụ đó/cung cấp dịch vụ của họ. Chúng tôi sẽ luôn yêu cầu họ sử dụng Thông tin cá nhân của bạn theo các hướng dẫn của chúng tôi, với các điều khoản của Chính sách bảo mật này và mọi biện pháp bảo mật và bảo mật thích hợp khác mà chúng tôi yêu cầu từ họ.

            Trừ khi được nêu chi tiết trong Chính sách bảo mật này, chúng tôi không cho thuê, bán hoặc chia sẻ thông tin cá nhân về bạn với những người khác hoặc công ty không liên kết mà không thông báo cho bạn và khi cần thiết. Nếu bạn đã đồng ý cho chúng tôi sử dụng Thông tin cá nhân của bạn theo cách này, nhưng sau đó đổi ý, bạn nên liên hệ với chúng tôi và chúng tôi sẽ ngừng làm như vậy.
        </Text>

        <Text style={styles.H2}>7. Cơ sở pháp lý của chúng tôi để xử lý Thông tin cá nhân</Text>
        <Text>
            Chúng tôi chỉ có thể xử lý Thông tin cá nhân của bạn nếu chúng tôi có cơ sở pháp lý để làm như vậy. Phần này đặt ra các căn cứ pháp lý mà chúng tôi dựa vào để xử lý Thông tin cá nhân của bạn.

            Chúng tôi xem xét rằng các cơ sở pháp lý để sử dụng Thông tin cá nhân của bạn như sau:

            việc sử dụng Thông tin Cá nhân của bạn là cần thiết để thực hiện nghĩa vụ của chúng tôi theo bất kỳ hợp đồng nào với bạn (ví dụ: tuân thủ Điều khoản Sử dụng của chúng tôi mà bạn chấp nhận bằng cách duyệt Trang web hoặc bằng cách tải xuống Ứng dụng);
            việc sử dụng Thông tin Cá nhân của bạn là cần thiết để tuân thủ các nghĩa vụ pháp lý của chúng tôi;
            nơi không áp dụng hai cơ sở pháp lý trên, việc sử dụng Thông tin Cá nhân của bạn là cần thiết vì lợi ích hợp pháp của chúng tôi hoặc lợi ích hợp pháp của người khác (ví dụ: để đảm bảo an ninh cho Trang web hoặc Ứng dụng). Lợi ích hợp pháp của chúng tôi là:
            để chạy, phát triển và phát triển doanh nghiệp của chúng tôi;
            để vận hành và bảo mật Trang web và Ứng dụng;
            tiếp thị, nghiên cứu thị trường và phát triển kinh doanh;
            để cung cấp Dịch vụ Cookpad cho người dùng của chúng tôi, để cung cấp cho khách hàng và các dịch vụ kỹ thuật và biết những người dùng mà chúng tôi đang cung cấp Dịch vụ Cookpad cho;
            để bảo vệ người dùng và Nhóm của chúng tôi khỏi gian lận hoặc gây hại; và
            cho mục đích quản trị nhóm nội bộ.
            Nếu chúng tôi dựa vào lợi ích hợp pháp của chúng tôi (hoặc của bên thứ ba) để sử dụng Thông tin cá nhân của bạn, chúng tôi sẽ thực hiện kiểm tra cân bằng để đảm bảo lợi ích hợp pháp của chúng tôi (hoặc của bên thứ ba) không bị ảnh hưởng bởi quyền lợi hoặc quyền cơ bản của bạn quyền tự do yêu cầu bảo vệ Thông tin cá nhân của bạn. Bạn có thể yêu cầu chúng tôi cung cấp thông tin về bài kiểm tra cân bằng này bằng cách liên hệ với chúng tôi.

            Việc sử dụng Thông tin Cá nhân khác (bao gồm các thông tin Cá nhân đặc biệt và tham gia chương trình beta) có thể được bạn đồng ý (bạn có thể rút lại bất kỳ lúc nào sau khi đã cung cấp).

            Nếu chúng tôi dựa vào sự đồng ý của bạn để chúng tôi sử dụng Thông tin cá nhân của bạn theo cách cụ thể, nhưng sau này bạn đổi ý, bạn có thể rút lại sự đồng ý của bạn bằng cách liên hệ với chúng tôi và chúng tôi sẽ ngừng làm như vậy. Tuy nhiên, nếu bạn rút lại sự đồng ý của mình, điều này có thể ảnh hưởng đến khả năng chúng tôi cung cấp dịch vụ cho bạn.
        </Text>

        <Text style={styles.H2}>8. Thông tin cá nhân của bạn được lưu trữ và xử lý ở đâu?</Text>
        <Text>
            Chúng tôi sẽ xử lý và lưu trữ Thông tin Cá nhân của bạn tại các vị trí mà Nhóm của chúng tôi hoạt động và ở vị trí của các máy chủ của chúng tôi. Bạn có thể tìm thêm chi tiết về các vị trí của Nhóm của chúng tôi tại tại đây.

            Chúng tôi tuân thủ các luật hiện hành liên quan đến việc chuyển giao Thông tin Cá nhân quốc tế.

            Nếu bạn ở trong Khu vực Kinh tế Châu Âu ("EEA"), xin lưu ý rằng chúng tôi có thể chuyển Thông tin cá nhân của bạn để cung cấp Dịch vụ Cookpad cho các địa điểm bên ngoài Khu vực kinh tế châu Âu, bao gồm Hoa Kỳ và Nhật Bản. Một số địa điểm đó có thể không cung cấp mức độ bảo vệ tương tự cho các quy định của Châu Âu. Trong những trường hợp này, chúng tôi sẽ đảm bảo rằng có các biện pháp bảo vệ phù hợp để bảo vệ Thông tin cá nhân của bạn theo Chính sách bảo mật này. Các biện pháp bảo vệ đầy đủ này bao gồm, trong trường hợp các tổ chức có trụ sở ở các nước ngoài EEA (kể cả Nhật Bản), ký kết thỏa thuận chuyển giao dữ liệu với người nhận dựa trên các điều khoản hợp đồng tiêu chuẩn được Ủy ban châu Âu phê duyệt để chuyển dữ liệu cá nhân sang các nước thứ ba.

        Các chi tiết khác về các bước chúng tôi thực hiện để bảo vệ Thông tin cá nhân của bạn, trong các trường hợp chuyển giao này có sẵn từ chúng tôi theo yêu cầu của liên hệ với chúng tôi bất kỳ lúc nào.
        </Text>
        <Text style={styles.H2}>9. Chúng tôi giữ thông tin cá nhân của bạn trong bao lâu?</Text>
        <Text>
            Chúng tôi sẽ không giữ Thông tin Cá nhân của bạn dài hơn mức cần thiết hợp lý để hoàn thành các mục đích được mô tả trong Chính sách Bảo mật này hoặc theo quy định của pháp luật. Đặc biệt, chúng tôi sẽ thực hiện chính sách lưu giữ quy định khoảng thời gian chúng tôi giữ Thông tin cá nhân. Chúng tôi sẽ xóa một cách an toàn Thông tin cá nhân mà chúng tôi không còn cần nữa và cập nhật, lưu trữ hoặc xóa một cách an toàn Thông tin cá nhân nếu thông tin đó hết hạn. Do đó, chúng tôi sẽ giữ lại bất kỳ dữ liệu cá nhân nào liên quan đến tài khoản của bạn miễn là bạn vẫn mở nó.

            Chúng tôi không giữ lại thông tin liên hệ mà bạn cung cấp về những người khác cho các mục đích phù hợp sau khi chúng tôi đã thực hiện kết hợp.

            Khoảng thời gian chúng tôi giữ lại Thông tin cá nhân tùy thuộc vào mục đích chúng tôi thu thập và sử dụng thông tin đó và/hoặc theo yêu cầu tuân thủ luật hiện hành và thiết lập, thực hiện bảo vệ quyền hợp pháp của chúng tôi.
        </Text>
        <Text style={styles.H2}>10. Làm cách nào để chúng tôi bảo mật Thông tin Cá nhân của bạn?</Text>
        <Text>
            Chúng tôi thực hiện các bước trong nỗ lực xử lý thông tin của bạn một cách an toàn và tuân theo Chính sách bảo mật này. Thật không may, internet không thể đảm bảo an toàn 100% và, như vậy, bạn thừa nhận và chấp nhận rằng chúng tôi không thể đảm bảo an toàn cho Thông tin cá nhân của bạn được truyền tới Trang web hoặc Ứng dụng và việc truyền tải đó có nguy cơ của riêng bạn.

            Nơi chúng tôi cung cấp cho bạn (hoặc nơi bạn đã chọn) mật khẩu cho phép bạn truy cập tài khoản trực tuyến của mình, bạn có trách nhiệm giữ bí mật mật khẩu này. Chúng tôi yêu cầu bạn không chia sẻ mật khẩu với bất kỳ ai.
        </Text>
        <Text style={styles.H2}>11. Còn về quyền riêng tư của trẻ em thì thế nào?</Text>
        <Text>
            Chúng tôi không cố ý thu thập, duy trì hoặc sử dụng Thông tin cá nhân từ trẻ em dưới 16 tuổi và không có phần nào của Dịch vụ Cookpad được hướng đến trẻ em dưới 16 tuổi. Nếu bạn biết rằng con bạn đã cung cấp cho chúng tôi Thông tin cá nhân mà không có sự đồng ý của bạn, bạn có thể thông báo cho chúng tôi. Nếu chúng tôi biết rằng chúng tôi đã thu thập bất kỳ Thông tin cá nhân nào từ trẻ em dưới 16 tuổi, chúng tôi sẽ nhanh chóng thực hiện các bước để xóa thông tin đó và chấm dứt tài khoản của cháu.
        </Text>
        <Text style={styles.H2}>12. Thay đổi Chính sách Bảo mật này</Text>
        <Text>
            Thỉnh thoảng, chúng tôi có thể cập nhật Chính sách Bảo mật này. Chúng tôi sẽ đăng bất kỳ thay đổi nào về Chính sách bảo mật trên Trang web hoặc ứng dụng của chúng tôi. Tùy thuộc vào ý nghĩa của các thay đổi, chúng tôi có thể liên lạc với bạn hoặc hiển thị thông báo nổi bật hơn. Nếu cần, chúng tôi sẽ gửi email cho bạn với các chi tiết về những thay đổi đó và/hoặc yêu cầu bạn xác nhận rằng bạn hài lòng với chúng. Vui lòng kiểm tra lại thường xuyên để xem mọi cập nhật hoặc thay đổi đối với Chính sách bảo mật của chúng tôi.

            Tháng 2, ngày 1, 2022

            Chúng tôi đã cập nhật Chính Sách Bảo Mật để:

            cập nhật địa chỉ đăng ký của công ty.
        </Text>
        <Text style={styles.H2}>13. Quyền của bạn</Text>
        <Text>
            Bạn có nhiều quyền khác nhau liên quan đến Thông tin cá nhân của bạn. Đặc biệt, bạn có quyền:

            nhận được xác nhận rằng chúng tôi đang xử lý Thông tin Cá nhân của bạn và yêu cầu một bản sao Thông tin Cá nhân mà chúng tôi giữ về bạn;
            yêu cầu chúng tôi cập nhật Thông tin Cá nhân mà chúng tôi có về bạn hoặc sửa Thông tin Cá nhân như vậy mà bạn nghĩ là không chính xác hoặc không đầy đủ;
            yêu cầu chúng tôi xóa Thông tin Cá nhân mà chúng tôi nắm giữ về bạn hoặc hạn chế cách chúng tôi sử dụng Thông tin Cá nhân đó;
            rút lại sự chấp thuận cho việc xử lý Thông tin Cá nhân của bạn, nơi chúng tôi dựa vào sự đồng ý của bạn làm cơ sở pháp lý để xử lý Thông tin Cá nhân đó;
            đối tượng để chúng tôi xử lý Thông tin Cá nhân của bạn;
            ngăn chặn việc xử lý Thông tin Cá nhân của bạn cho các mục đích tiếp thị trực tiếp qua email hoặc thông báo đẩy; hoặc
            yêu cầu chúng tôi xem xét bất kỳ phản đối hợp lệ nào mà bạn phải sử dụng Thông tin Cá nhân của chúng tôi.
            Để thực hiện bất kỳ quyền nào của bạn, vui lòng liên hệ với chúng tôi.

            Chúng tôi sẽ xem xét tất cả các yêu cầu đó và cung cấp phản hồi của chúng tôi trong một khoảng thời gian hợp lý (và trong mọi trường hợp bất kỳ khoảng thời gian nào theo yêu cầu của pháp luật hiện hành). Tuy nhiên, xin lưu ý rằng một số Thông tin Cá nhân nhất định có thể được miễn yêu cầu như vậy trong một số trường hợp nhất định.
        </Text>
        <Text style={styles.H2}>14. Liên hệ với chúng tôi, các câu hỏi khác và cách khiếu nại</Text>
        <Text>
            Nếu bạn có bất kỳ thắc mắc nào về việc chúng tôi thu thập sử dụng hoặc lưu trữ Thông tin cá nhân của bạn, vui lòng liên hệ với Văn phòng bảo vệ dữ liệu của Cookpad:
            Qua email: info-vn@cookpad.com
            Qua đường bưu điện: Văn phòng bảo vệ dữ liệu FAO, Silversmiths 1-3 Broad Plain, Bristol BS2 0JP, United Kingdom (Vương quốc Anh)
            Nếu bạn không hài lòng với cách chúng tôi xử lý Thông tin cá nhân của bạn hoặc bất kỳ truy vấn bảo mật hoặc yêu cầu nào mà bạn đã nêu với chúng tôi, chúng tôi luôn muốn bạn liên hệ với chúng tôi đầu tiên. Tuy nhiên, bạn có quyền khiếu nại với Cơ quan bảo vệ dữ liệu của EU (“DPA”) ở quốc gia nơi bạn thường sống hoặc làm việc hoặc nơi xảy ra vi phạm luật về quyền riêng tư. Ở Anh (ví dụ), DPA là Văn phòng Ủy viên Thông tin. Nếu bạn muốn được chuyển đến DPA thích hợp, vui lòng liên hệ với chúng tôi theo chi tiết liên hệ ở trên. Ngoài ra, bạn có thể tìm kiếm một biện pháp khắc phục thông qua các tòa án nếu bạn cho rằng quyền của mình đã bị vi phạm.
        </Text>
      </View>
    )
}
const styles = StyleSheet.create({
    Content:{
        paddingTop:30,
    },
    H1:{
      fontSize:25,
      fontWeight:'700',
      marginBottom:5,
    },
    H2:{
      fontSize:18,
      fontWeight:'500',
      marginBottom:5,
    },
    H3:{
      fontSize:15,
      fontWeight:'500',
      marginBottom:5,
    },
})
export default ChinhSach
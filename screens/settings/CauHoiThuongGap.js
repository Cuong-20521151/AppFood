import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CauHoiThuongGap = ({navigation}) => {
    return(
      <View style={styles.Content}>
        <Text style = {styles.H1}>Những Câu Hỏi Thường Gặp</Text>
        <Text style = {styles.H2}>Thông tin tài khoản</Text>
        <Text style = {styles.H3}>Làm cách nào để thay đổi tên người dùng của tôi? </Text>
        <Text>Nếu bạn muốn chỉnh sửa tên người dùng của mình, vui lòng truy cập trang bếp cá nhân của bạn, nhấp vào hình ở góc trên cùng bên phải màn hình, và sau đó bạn có thể chỉnh sửa tên người dùng và hình ảnh.</Text>

        <Text style = {styles.H3}>Làm cách nào để tắt thông báo của tôi? </Text>
        <Text>Chúng tôi có một trang nơi bạn có thể chỉnh sửa tùy chọn thông báo của mình tại đây</Text>

        <Text style = {styles.H3}>Tôi không thể đăng nhập, xin giúp đỡ! </Text>
        <Text>Để đặt lại mật khẩu của bạn, vui lòng bấm vào đây</Text>

        <Text style = {styles.H3}>Tôi muốn hủy tài khoản của mình! </Text>
        <Text>Bạn có thể gửi email cho chúng tôi theo địa chỉ info-vn@cookpad.com và yêu cầu chúng tôi đóng tài khoản của bạn hoặc xem cài đặt của bạn để chỉnh sửa tùy chọn email của bạn.</Text>

        <Text style = {styles.H3}>Làm cách nào để xóa tài khoản của tôi trên Cookpad? </Text>
        <Text>Nếu bạn muốn xóa tài khoản của mình, bạn có thể làm như vậy tại đây</Text>

        <Text style={styles.H2}>Thông báo</Text>
        <Text style = {styles.H3}>Làm cách nào để nhận email? </Text>
        <Text>Nếu bạn muốn được thêm vào danh sách email của chúng tôi, vui lòng bật thông báo trên trang thông báo của chúng tôi.</Text>

        <Text style = {styles.H3}>Làm cách nào để hủy đăng ký nhận email? </Text>
        <Text>Bạn có thể thay đổi tùy chọn email và thông báo của mình bất kỳ lúc nào trên trang thông báo của chúng tôi.</Text>

        <Text style={styles.H2}>Liên hệ với Cookpad</Text>
        <Text style = {styles.H3}>Làm cách nào để liên hệ với Cookpad? </Text>
        <Text>Bạn có thể gửi email cho chúng tôi tại info-vn@cookpad.com</Text>

        <Text style={styles.H2}>Làm cách nào để…</Text>
        <Text style = {styles.H3}>Làm cách nào để thêm món mới? </Text>
        <Text>Nếu bạn đang sử dụng ứng dụng, hãy nhấp vào nút dấu cộng ở cuối màn hình, ở giữa, rồi chọn “Viết món mới”.</Text>

        <Text>Nếu bạn đang truy cập web, hãy nhấp vào nút dấu cộng “Viết món mới”.</Text>

        <Text style = {styles.H3}>Làm cách nào để xóa một món đã lên sóng? </Text>
        <Text>Nếu bạn đang sử dụng ứng dụng, hãy nhấp vào dấu chấm lửng ngang (biểu tượng ba chấm) ở phía trên bên phải của màn hình và nhấp vào “Xóa món này”.</Text>

        <Text>Nếu bạn đang truy cập web, hãy nhấp vào dấu chấm lửng ngang (biểu tượng ba chấm) ở phía trên bên trái của màn hình, sau đó nhấp vào “Xóa”.</Text>

        <Text style = {styles.H3}>Làm cách nào để tìm kiếm một món nào đó? </Text>
        <Text>Nhập cụm từ tìm kiếm của bạn vào thanh tìm kiếm (có biểu tượng tìm kiếm hình kính lúp và “tên món, nguyên liệu” màu xám nhạt) và nhấn Enter.</Text>

        <Text style = {styles.H3}>Làm cách nào để giao tiếp với các tác giả khác? </Text>
        <Text>Bạn có thể để lại bình luận/thắc mắc cho các món được các tác giả lên sóng, hoặc gửi Cooksnap (hình bạn đã làm theo món đó) cho các tác giả nhé!</Text>

        <Text style = {styles.H3}>Làm cách nào để theo dõi một bạn bếp? </Text>
        <Text>Bất cứ khi nào bạn nhìn thấy một món nào đó, bên cạnh tên tác giả là nút cho phép bạn theo dõi hoặc hủy theo dõi. Nếu nó cho biết “Kết Bạn Bếp” có nghĩa là bạn chưa theo dõi họ và bạn chỉ cần nhấp vào nút để theo dõi họ, thì nút sẽ hiển thị “Bạn Bếp”.

        Để hủy theo dõi, bạn chỉ cần nhấp vào nút có nội dung “Bạn Bếp” và khi bạn thấy dòng chữ chuyển thành “Kết Bạn Bếp” thì bạn biết mình không còn theo dõi họ nữa.</Text>

        <Text style = {styles.H3}>Làm cách nào để lưu/bỏ lưu một món nào đó? </Text>
        <Text>Để lưu món, hãy nhấp vào biểu tượng dấu trang. Khi nó chuyển sang màu trắng, nghĩa là món đã được lưu.</Text>

        <Text>Để bỏ lưu món, hãy nhấp vào biểu tượng đó và khi nó chuyển sang trong suốt trở lại, nghĩa là bạn đã bỏ lưu món đó thành công.</Text>

        <Text style = {styles.H3}>Làm cách nào để tải xuống ứng dụng Cookpad? </Text>
        <Text>Truy cập App Store hoặc Google Play, rồi tìm kiếm ‘Cookpad’ và nhấp vào tải xuống.</Text>
        <Text style = {styles.H3}>Làm thế nào tôi có thể giữ một món riêng tư? </Text>
        <Text>Nếu bạn muốn giữ cách làm món nào đó riêng tư, tất cả những gì bạn phải làm là viết món đó như bình thường, sau đó:

        Nếu bạn đang truy cập web, đừng nhấp vào Lên sóng. Món bạn vừa viết sẽ được lưu trong phần “Món Nháp” của bạn với biểu tượng ổ khóa bên cạnh.

        Nếu bạn đang sử dụng ứng dụng, chỉ cần nhấp vào Lưu mà không nhấp vào Lên sóng và món của bạn sẽ được lưu trong phần Món nháp của bạn với biểu tượng ổ khóa bên cạnh.

        Bạn có thể truy cập và chỉnh sửa các món chưa được xuất bản này bất kỳ lúc nào và chúng sẽ ở chế độ riêng tư.</Text>

        <Text style = {styles.H3}>Làm cách nào để xem thống kê về các món đã lên sóng của tôi? </Text>
        <Text>Truy cập vào trang bếp cá nhân của bạn, bạn sẽ thấy một biểu tượng hình biểu đồ ở góc trên, bên phải màn hình. Nếu bạn nhấp vào, bạn sẽ được đưa đến trang thống kê của mình.</Text>

        <Text style = {styles.H3}>Làm cách nào để tôi có thể sửa chữa một món đã lên sóng? </Text>
        <Text>Nếu bạn đang ở trên web, hãy nhấp vào món bạn muốn chỉnh sửa, nhấp vào Sửa ở góc trên, bên trái màn hình. Các thay đổi của bạn sẽ tự động lưu và bạn không phải làm gì khác.</Text>

        <Text>Nếu bạn đang sử dụng ứng dụng, hãy nhấp vào món bạn muốn chỉnh sửa, nhấp vào dấu 3 chấm ở góc trên, bên phải màn hình, và chọn “Chỉnh sửa”. Sau đó, bạn chỉ cần nhấn “Lên sóng” thì món của bạn sẽ được lưu.</Text>

        <Text style = {styles.H3}>Làm cách nào để thêm ảnh vào món đã lên sóng của tôi? </Text>
        <Text>Bạn sẽ cần làm các thao tác để chỉnh sửa món như ở trên. Sau đó, bạn nhấp vào bất kỳ bước nào trong món mà bạn cần thêm hình ảnh, nhấp vào biểu tượng máy ảnh và thêm ảnh.</Text>

        <Text style = {styles.H3}>Làm cách nào để tôi có thể nhận xét về món ăn của các bạn khác? </Text>
        <Text>Nếu bạn có câu hỏi cho tác giả món nào hay muốn bình luận về món nào đó, bạn có thể nhấp vào món đó và lướt đến cuối trang, sẽ có phần “Bình Luận” để bạn có thể thêm vào.</Text>

        <Text style = {styles.H3}>Tôi có 2 tài khoản trên Cookpad, làm cách nào để nhập 2 tài khoản đó thành 1? </Text>
        <Text>Rất tiếc, chúng tôi không thể hợp nhất các tài khoản nhưng bạn có thể sao chép tất cả các món từ tài khoản này sang tài khoản còn lại và yêu cầu xóa tài khoản kia.</Text>

        <Text style={styles.H2}>Câu hỏi thường gặp cho Gói Nâng Cấp (Premium)</Text>
        <Text style = {styles.H3}>Gói Nâng Cấp là gì? </Text>
        <Text>Gói Nâng Cấp là dịch vụ đăng ký của Cookpad. Nó giúp cho việc tìm kiếm các món ăn ngon trở nên dễ dàng hơn. Với Gói Nâng Cấp, bạn chỉ cần tìm kiếm tên món hoặc nguyên liệu theo cách thông thường và bạn sẽ tìm thấy những món được cộng đồng Cookpad yêu thích với tỷ lệ thành công cao nhất đầu tiên, thay vì những món đã lên sóng gần đây nhất. Ngoài ra còn có rất nhiều lợi ích tuyệt vời khác, bao gồm bộ lọc tìm kiếm Nâng Cấp, lưu món không giới hạn, và đặc quyền truy cập vào Đại Lộ Danh Bếp, nơi tôn vinh các món được cộng đồng Cookpad yêu thích nhất.</Text>

        <Text style = {styles.H3}>Làm cách nào để trở thành thành viên Gói Nâng Cấp? </Text>
        <Text>Cách dễ nhất để trở thành thành viên Nâng Cấp là truy cập vào thanh tìm kiếm, nhấn vào biểu tượng Premium và làm theo hướng dẫn trên màn hình để đăng ký.</Text>

        <Text style = {styles.H3}>Ưu đãi dùng thử miễn phí gói Nâng Cấp hoạt động như thế nào? </Text>
        <Text>Khi bắt đầu dùng thử miễn phí, bạn sẽ được yêu cầu đăng ký chi tiết thanh toán của mình nhưng bạn sẽ không bị tính phí cho đến khi kết thúc thời gian dùng thử miễn phí. Khoản thanh toán hàng tháng đầu tiên của bạn sẽ tự động bị tính phí khi thời gian dùng thử miễn phí kết thúc, và đăng ký của bạn sẽ tự động được gia hạn hàng tháng trừ khi bạn hủy gói đó ít nhất 24 giờ trước khi kết thúc giai đoạn đăng ký hiện tại.</Text>

        <Text style = {styles.H3}>Làm cách nào để thay đổi hoặc hủy đăng ký của tôi (iOS)? </Text>
        <Text>Tất cả mọi đăng ký và thanh toán đều do Apple quản lý và bạn có thể tìm thấy hướng dẫn đầy đủ về cách sửa đổi hoặc hủy đăng ký tại đây Lưu ý - phí đăng ký không được hoàn lại và không có khoản hoàn trả hoặc tín dụng cho một phần thời hạn thanh toán hàng tháng.</Text>

        <Text style = {styles.H3}>Làm cách nào để thay đổi hoặc hủy đăng ký của tôi (Android)? </Text>
        <Text>Tất cả các đăng ký và thanh toán đều do Google quản lý và bạn có thể tìm thấy hướng dẫn đầy đủ về cách sửa đổi hoặc hủy đăng ký của mình tại đây Lưu ý - phí đăng ký không được hoàn lại và không có khoản hoàn trả hoặc tín dụng cho một phần thời hạn thanh toán hàng tháng.</Text>

        <Text style = {styles.H3}>Làm cách nào để thay đổi hoặc hủy đăng ký của tôi (web)? </Text>
        <Text>Nếu bạn đã đăng ký gói Nâng Cấp trên web, bạn có thể quản lý đăng ký của mình trực tiếp trong Cookpad. Chỉ cần truy cập trang hồ sơ Cookpad của bạn, nhấp vào biểu tượng cài đặt ở góc trên cùng bên phải và chọn “Huỷ đăng ký”. Từ đó, bạn có thể hủy đăng ký của mình. Lưu ý - phí đăng ký không được hoàn lại và không có khoản hoàn trả hoặc tín dụng cho một phần thời hạn thanh toán hàng tháng.</Text>

        <Text style = {styles.H3}>Làm cách nào để sửa đổi hoặc cập nhật chi tiết thanh toán của tôi (iOS)? </Text>
        <Text>Tất cả các đăng ký và thanh toán đều do Apple quản lý và bạn có thể tìm thấy hướng dẫn đầy đủ về cách cập nhật chi tiết thanh toán của mình tại đây
        </Text>

        <Text style = {styles.H3}>Làm cách nào để sửa đổi hoặc cập nhật chi tiết thanh toán của tôi (Android)? </Text>
        <Text>Tất cả các đăng ký và thanh toán đều do Google quản lý và bạn có thể tìm thấy hướng dẫn đầy đủ về cách cập nhật chi tiết thanh toán của mình tại đây
        </Text>

        <Text style = {styles.H3}>Tại sao tôi không thể xem tất cả các món đã lưu của mình? </Text>
        <Text>Lưu món không giới hạn giờ là đặc quyền của gói Nâng Cấp. Nếu bạn chưa đăng ký gói Nâng Cấp thì bạn vẫn có thể xem 60 món đã lưu gần đây nhất của bạn. Để xem đầy đủ tất cả các món đã lưu của bạn và tận hưởng nhiều tính năng Nâng Cấp độc quyền khác, chỉ cần đăng ký gói Cookpad Nâng Cấp. Cách dễ nhất để trở thành thành viên Nâng Cấp là truy cập vào thanh tìm kiếm, nhấn vào biểu tượng Premium và làm theo hướng dẫn trên màn hình.
        </Text>

        <Text style = {styles.H3}>Tôi đã đăng ký gói Nâng Cấp nhưng tôi không thể thấy các món Nâng Cấp khi đăng nhập vào tài khoản quốc gia khác. Tại sao vậy?</Text>
        <Text>Bạn sẽ chỉ có thể xem các món Nâng Cấp ở quốc gia mà bạn đã đăng ký gói Nâng Cấp. Nếu bạn có hai tài khoản Cookpad để truy cập các món ăn ở 2 quốc gia và ngôn ngữ khác nhau, bạn sẽ cần đăng ký gói Nâng Cấp ở cả hai quốc gia để xem được các món Nâng Cấp của cả 2 nơi.
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
export default CauHoiThuongGap
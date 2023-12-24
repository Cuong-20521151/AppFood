import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HuongDan = ({navigation}) => {
    return(
      <View style={styles.Content}>
        <Text style={styles.H1}>Hướng Dẫn Dành Cho Cộng Đồng Sử Dụng Cookpad</Text>
        <Text style={styles.H2}>Chào mừng bạn đến với Cookpad!</Text>
        <Text>
          Chúng tôi rất vui mừng khi có bạn tham gia cộng đồng cookpad quốc tế, bao gồm những tín đồ ẩm thực và những đầu bếp tại gia đầy đam mê. Hy vọng bạn cũng có chung niềm yêu thích bếp núc với chúng tôi!

Khi đăng ký thành công vào cộng đồng Cookpad, bạn sẽ tham gia cùng hàng triệu thành viên yêu thích ẩm thực đăng tải công thức nấu ăn và hình ảnh những tác phẩm ẩm thực của họ. Trước khi bạn bắt đầu, xin lưu ý rằng việc sử dụng trang web của chúng tôi yêu cầu bạn tuân thủ theo các nguyên tắc cộng đồng quy định dưới đây.
        </Text>
        <Text style={styles.H2}>Trên trang Cookpad</Text>
        <Text>Ngay từ đầu, phương châm Cookpad luôn luôn là: “Vui nấu mỗi ngày!”

Mỗi công thức được đăng trên Cookpad có một câu chuyện độc đáo đằng sau nó. Đó có thể là một bí kíp gia truyền được nâng niu và truyền lại cho bao thế hệ sau, một niềm tự hào thầm kín của một đầu bếp chuyên nghiệp, một sản phẩm của vô số lần sửa đổi, hoặc chỉ đơn giản là kết quả của một phát hiện tình cờ.
        </Text>
        <Text style={styles.H2}>Chịu trách nhiệm về nội dung bạn đăng tải</Text>
        <Text>
            Bạn có thể chia sẻ công thức nấu ăn của bạn trên Cookpad với cộng đồng, do đó điều hiển nhiên là phép lịch sự và thái độ nhã nhặn là rất quan trọng! Hãy nhớ rằng đây là một trang web công cộng, có thể được truy cập bởi tất cả người dùng. Bạn không được đăng những nội dung có ý đe dọa, quấy rối, phỉ báng, hoặc bôi nhọ người khác. Việc sử dụng những từ ngữ cố ý làm sai lệch hoặc gây hiểu nhầm cũng bị cấm.

Mục đích của chúng tôi là đảm bảo rằng cộng đồng của chúng ta mang tính đại chúng, thân thiện và an toàn cho tất cả mọi người. Cookpad không chịu trách nhiệm cho lời nói của bạn và có quyền gỡ bỏ những lời bình luận ác ý hoặc chấm dứt tài khoản của những thành viên cố tình liên tiếp đăng tải nội dung không lành mạnh, theo quyết định của chúng tôi.
        </Text>
        <Text style={styles.H2}>Viết công thức nấu ăn</Text>
        <Text>Chúng tôi tin rằng sức mạnh của Cookpad nằm trong sự đa dạng của kỹ thuật nấu nướng và các món ăn được trình bày. Các công thức là kết quả của những kỷ niệm gia đình, những thử nghiệm và sai sót, và có khi là của sự may mắn tuyệt vời. Vì vậy, đừng ngần ngại trong việc đăng tải trải nghiệm ẩm thực của riêng bạn trong một món ăn, thậm chí ngay cả khi bạn nhìn thấy một cái tương tự đã được đăng tải!

Chúng tôi hiểu rằng nhiều công thức nấu ăn dựa trên những gợi ý từ các chương trình TV, sách dạy nấu ăn, các blog, các trang web, hoặc công thức nấu ăn của người dùng khác. Chúng tôi muốn cho những nguồn cảm hứng đằng sau công thức nấu ăn này của bạn là một phần của nội dung bạn đăng tải, nên cứ tự nhiên và nhớ gửi lời cảm ơn tác giả cũng như ghi chú nguồn tham khảo nhé. Tất nhiên, trong trường hợp chúng tôi nghi ngờ có cơ sở rằng có cố tình đạo văn, công thức của bạn có thể bị xóa và bạn có thể nhận được một cảnh báo từ các nhà quản lý cộng đồng của chúng tôi. Tuy chúng tôi không tán thành việc bêu riếu trước công chúng, nhưng chúng tôi có những biện pháp rất cứng rắn đối với việc cố ý đạo văn.

Một điều cũng quan trọng nên nhớ là không nên đăng tải những công thức nấu ăn hoặc hình ảnh được bảo hộ quyền tác giả. Mặc dù việc đăng tải công thức lên Cookpad không đòi hỏi phải có hình ảnh, nhưng vui lòng lưu ý rằng bạn nên có ít nhất một hình thành phẩm món ăn làm ảnh đại diện. và hình ảnh này phải là ảnh do chính bạn chụp và thực hiện món mà bạn hướng dẫn. Những hình ảnh không thuộc sở hữu của bạn, được lấy từ nguồn khác đã đăng trên internet hay chụp lại từ sách báo sẽ không được chấp nhận.

Hơn nữa, đừng quên là khi bạn lên sóng công thức thì sẽ có rất nhiều thành viên của Cookpad trên khắp thế giới muốn áp dụng công thức nấu ăn của bạn trong bếp nhà họ. Vì thế hãy chắc chắn rằng những hướng dẫn của bạn rõ ràng và dễ hiểu, và việc có những hình ảnh đăng kèm trong từng bước làm sẽ rất hữu ích cho người xem làm theo. Với ý nghĩa đó, vui lòng không đăng những hình ảnh không phải là hình thức ăn hay không liên quan đến việc nấu ăn và công thức của bạn. Bởi vì dù sao đi nữa, tất cả chúng ta tham gia vào Cookpad đều với mục đích chung là giúp đỡ lẫn nhau, cùng nhau làm cho công việc nấu nướng ngày càng vui hơn phải không?
        </Text>
        <Text style={styles.H2}>4. Cookie</Text>
        
        <Text>
            Chúng tôi và các đối tác bên thứ ba của chúng tôi, chẳng hạn như mạng quảng cáo, tiện ích truyền thông xã hội và nhà cung cấp phân tích, sử dụng cookie và các công nghệ tương tự để cung cấp, hỗ trợ và cải thiện Dịch vụ Cookpad và từng ứng dụng được nêu và được mô tả trong Chính sách bảo mật này. Các đối tác của chúng tôi cũng có thể thu thập thông tin về các hoạt động trực tuyến của bạn theo thời gian, trên các thiết bị khác và trên các trang web hoặc ứng dụng khác. Các bên thứ ba đó có thể có chính sách bảo mật riêng của họ về việc sử dụng Thông tin cá nhân của bạn. Để tắt cookie, bạn cần thay đổi cài đặt trình duyệt của mình. Để biết thêm thông tin về cách thực hiện việc này, vui lòng truy cập http://www.aboutcookies.org/. Xin lưu ý rằng nếu bạn chọn tắt cookie trên thiết bị của mình, điều đó có nghĩa là một số chức năng nhất định của Trang web và ứng dụng của chúng tôi không thể hoạt động bình thường và khả năng sử dụng của Dịch vụ Cookpad sẽ bị ảnh hưởng.

            Đọc Chính sách Cookie của chúng tôi để tìm hiểu thêm.
        </Text>
        <Text style={styles.H2}>Chú ý Quyền sở hữu nội dung</Text>
        <Text>
            Nội dung bạn đăng tải khi sử dụng tài khoản Cookpad phải của riêng bạn. Điều này bao gồm hình ảnh được sử dụng trong hồ sơ của bạn, hình ảnh minh họa các bước nấu ăn, hoặc bất cứ điều gì khác được sử dụng trong bài viết công thức của bạn. Nếu sử dụng nội dung không phải là của riêng bạn, trước tiên bạn phải xin phép từ người chủ hoặc nguồn trích dẫn thích hợp trước khi đăng công thức của bạn.
        </Text>
        <Text style={styles.H2}>Luôn tập trung vào chủ đề</Text>
        <Text>
            Chúng tôi tin rằng một trang web chia sẻ công thức nấu ăn thì chỉ nên xoay quanh chủ đề nấu ăn! Với phương châm này, chúng tôi đã quyết định đưa một số chủ đề vào danh sách “Cấm” trên Cookpad. Những nội dung bị cấm bao gồm, nhưng không giới hạn trong những mục sau: quảng cáo hoặc tiếp thị cho những hoạt động kinh doanh hay các trang web bên ngoài vì mục đích lợi nhuận, các cuộc tấn công cá nhân, và ngôn ngữ xúc phạm.
        </Text>

        <Text style={styles.H2}>Chú ý những thuật ngữ bị cấm</Text>
        <Text>
            Có những từ ngữ cụ thể chúng tôi cho là không phù hợp và không thích hợp để sử dụng trên Cookpad. Nếu những từ như vậy được sử dụng trong công thức, hay trong phần bình luận, thì công thức hay bình luận của bạn sẽ không được lưu.
        </Text>

        <Text style={styles.H2}>Nắm rõ quy tắc</Text>
        <Text>
            Bằng việc đăng ký là thành viên cộng đồng Cookpad, bạn cũng đồng ý với điều khoản sử dụng của chúng tôi. Những hướng dẫn này có thể thay đổi theo thời gian, do đó, xin vui lòng kiểm tra lại thường xuyên.
        </Text>
        <Text style={styles.H2}>Liên Hệ với Chúng Tôi!</Text>
        <Text>
            Chúng tôi mong muốn được nghe phản hồi từ bạn! Hãy gửi cho chúng tôi thông tin phản hồi hoặc câu hỏi của bạn về trang web. Nếu bạn vô tình phát hiện nội dung có vấn đề, vui lòng đánh dấu bằng cách ghi vào phiếu thông tin phản hồi để gửi đến người quản lý cộng đồng. Chúng tôi sẽ cố gắng giải quyết kín đáo bất kỳ mối quan tâm nào một cách chi tiết và cụ thể nhất. Bạn có thể gửi email cho chúng tôi tại info-vn@cookpad.com.
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
    
})
export default HuongDan
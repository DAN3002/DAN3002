export const processEmailBody = (name, message) => `<div
style="background-color: rgb(251, 243, 243); width: 50%; margin: auto; padding: 15px; margin-top: 20px; font-family: Arial,Helvetica,sans-serif; font-size: 14px; line-height: 22.4px; color: #444444;">
<p style="white-space: pre-line">
	<b>Dear ${ name }</b>
	Thanks for contacting me. I have received your message:
	"${ message }"
	I will contact you as soon as possible!

	Thanks and best regards.
	AnhND.
</p>
<hr>
<div style="display: flex;width: 100%;margin-top: 10px;">
	<div style="width: 50%;">
		<h3 style="margin: 0px;">Nguyễn Đình Anh</h3>
		<div style="margin-top: 10px;">
			<p style="margin: 0px;">
				<b>Website:</b>
				<a href="https://dan3002.web.app/" target="_blank">dan3002.web.app</a>
			</p>
			<p style="margin: 0px;">
				<b>Email:</b>
				<a href="mailto:dinhanh300229@gmail.com" target="_blank">dinhanh300229@gmail.com</a>
			</p>
			<p style="margin: 0px;">
				<b>Phone:</b>
				<span>(+84) 914085246</span>
			</p>
			<p style="margin: 0px;">
				<b>Location:</b>
				<span>Ha Noi, Viet Nam</span>
			</p>
		</div>
	</div>
	<div style="width:50%">
		<div>
			<h3>STAY CONNECTED</h3>
		</div>
		<div style="display:flex;flex-wrap:wrap;">
			<a href="https://www.facebook.com/dan3002/" target="_blank" rel="noopener noreferrer"
				style="text-decoration:none;border:0;width:30px;height:30px;padding:2px;margin:5px;color:#cceff5;border-radius:50%;background-color:#0d2744; margin-right:20px">
				<img src="https://dan3002.web.app/images/icon/facebook.png" alt=""
					style="width:30px;height:30px">
			</a>
			<a href="mailto:dinhanh300229@gmail.com" target="_blank" rel="noopener noreferrer"
				style="text-decoration:none;border:0;width:30px;height:30px;padding:2px;margin:5px;color:#cceff5;border-radius:50%;background-color:#0d2744;margin-right:20px">
				<img src="https://dan3002.web.app/images/icon/email.png" alt="" style="width:30px;height:30px">
			</a>
			<a href="https://www.linkedin.com/in/dan3002/" target="_blank" rel="noopener noreferrer"
				style="text-decoration:none;border:0;width:30px;height:30px;padding:2px;margin:5px;color:#cceff5;border-radius:50%;background-color:#0d2744;margin-right:20px">
				<img src="https://dan3002.web.app/images/icon/linkedin.png" alt=""
					style="width:30px;height:30px">
			</a>
			<a href="https://github.com/DAN3002" target="_blank" rel="noopener noreferrer"
				style="text-decoration:none;border:0;width:30px;height:30px;padding:2px;margin:5px;color:#cceff5;border-radius:50%;background-color:#0d2744;margin-right:20px">
				<img src="https://dan3002.web.app/images/icon/github.png" alt="" style="width:30px;height:30px">
			</a>
		</div>
	</div>
</div>
</div>
`;

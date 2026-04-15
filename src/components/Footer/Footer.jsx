import FooterLogo from "../../assets/images/logo-xl.png";
import InstagramLogo from "../../assets/images/instagram.png"
import FacebookLogo from "../../assets/images/facebook.png"
import TwitterLogo from "../../assets/images/twitter.png"

const Footer = () => {
	return (
		<div className="bg-emerald-800">
			<div className="max-w-7xl mx-auto flex justify-center items-center flex-col pt-7 pb-5 px-2 lg:px-0">
				<div className="flex items-center flex-col pb-3 gap-3">
					<img
						src={FooterLogo}
						alt="Footer Logo"
						className="w-50 md:w-80 lg:w-90"
					/>
					<p className="text-zinc-300 text-center">
						Your personal shelf of meaningful connections. Browse,
						tend, and nurture the relationships that matter most.
					</p>
				</div>

				<div className="pb-6 text-center">
					<h3 className="font-medium text-xl text-zinc-300 mb-4">
						Social Links
					</h3>

					<div className="flex items-center gap-3">
						<a href="/">
							<img src={InstagramLogo} alt="Instagram Logo" />
						</a>

						<a href="/">
							<img src={FacebookLogo} alt="Facebook Logo" />
						</a>

						<a href="/">
							<img src={TwitterLogo} alt="Twitter Logo" />
						</a>
					</div>
				</div>

				<div className="border-t pt-6 w-full border-zinc-500">
					<div className="flex flex-col gap-3 md:flex-row justify-between items-center text-zinc-400">
						<p>© 2026 KeenKeeper. All rights reserved.</p>
						<div className="flex gap-6">
							<span>Privacy Policy</span>
							<span>Terms of Service</span>
							<span>Cookies</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

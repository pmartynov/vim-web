import React, {Component} from "react";
import LoginBtn from "../buttons/LoginBtn/LoginBtn";
import './header.css';
import Btn from "../buttons/Btn/btn";
import EosService from "../../../services/EosService";
import ResponseUtils from "../../../utils/ResponseUtils";

class Header extends Component {

	render() {
		return (
			<div className="container_header">
				<div className="body_header main_container">
					<LoginBtn/>
					<Btn className="white-btn" value="Upload photo" onClick={() => {
						ResponseUtils.toConsole(EosService.getKeyAccounts('EOS6ggdQVDb3XTURZzKDQp23WtpNS8KUDetSMLQMTm9AziyKjsuxB'));
						//console.log(EosService.privateToPublic('5JLeFpnv2xfee51F1JgVJYF43c5BaikypDR2hNdckRJSgxBogze'));
					}}
					/>
				</div>
			</div>
		);
	}
}

export default Header;
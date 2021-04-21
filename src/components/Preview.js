import { NoPrint } from 'react-easy-print';
import { FaHome, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';


function Preview(props) {
if(props.firstName){
        return (
            <div className="gen-info">


                    <div className="info-wrapper">
                        <ul>
                            <li>
                                <div className="icon-wrapper info address">
                                    <FaHome />
                                </div>
                                <div className="text-wrapper info address">
                                    {props.address}
                                </div>
                            </li>

                            <li>
                                <div className="icon-wrapper info email">
                                    <MdEmail />
                                </div>
                                <div className="text-wrapper info email">
                                    {props.email}
                                </div>
                            </li>

                            <li>
                                <div className="icon-wrapper info phone">
                                    <FaPhone />
                                </div>
                                <div className="text-wrapper info phone">
                                    {props.phone}
                                </div>
                            </li>              
                        </ul>
                    </div>

                <div className="gen-info-header">   
                    <div className="name-wrapper">
                        <h2 className="nameTag">
                            {props.firstName} {props.lastName}
                        </h2>
                        <h2 className="titleTag">
                            {props.title}
                        </h2>
                    </div>
                </div>
                <h2 className="header-wrapper">About me</h2>
                <div className="about-section main-section">

                    <p className="about-info">{props.about}</p>
                    <NoPrint>
                    <div className="edit-button-wrapper">
                    <button className="edit-button" onClick={props.handleEdit}>Edit</button>
                </div>
                </NoPrint>
                </div>



            </div>
        )
    } else if (props.companyName) {
        return (
            <div className="exp-section main-section">

                <div className="exp-date-wrapper exp-text">
                    <p className="exp-date">{props.companyFrom}</p> - <p className="exp-date">{props.companyTo}</p>          
                </div>
                <h3 className="positionTag exp-text">{props.position}</h3>
                <p className="companyTag exp-text">{props.companyName}</p>
                <p className="detailTag exp-text">{props.detail}</p>

                    
            <NoPrint>
            <div className="edit-button-wrapper">
                    <button className="edit-button" onClick={props.handleEdit}>Edit</button>
                </div>
                </NoPrint>
            </div>

        );
    } else {
        return (
            <div className="main-section">

            <div className="edu-info ">
                <div className="edu-date-wrapper edu-text">
                    <p className="edu-date">{props.from}</p> - <p className="edu-date">{props.to}</p>          
                </div>
                <h3 className="positionTag edu-text">{props.degree}</h3>
                <p className="companyTag edu-text">{props.universityName}</p>

            </div>
            <NoPrint>
            <div className="edit-button-wrapper">
                    <button className="edit-button" onClick={props.handleEdit}>Edit</button>
                </div>
                </NoPrint>
            </div>

        )
    }
}

export default Preview;
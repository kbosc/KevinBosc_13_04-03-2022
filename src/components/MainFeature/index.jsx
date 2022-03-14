import React from 'react';

import * as Style from "./style"
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";

export default function MainFeature(props) {
    return (
        <Style.MainSectionFeatures>
            <Style.MainSectionFeaturesItem>
                <img src={ iconChat } alt="Chat Icon" />
                <h3>You are our #1 priority</h3>
                <p>
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </p>
            </Style.MainSectionFeaturesItem>
            <Style.MainSectionFeaturesItem>
                <img src={ iconMoney } alt="Chat Icon" />  
                <h3>More savings means higher rates</h3>
                <p>
                    The more you save with us, the higher your interest rate will be!
                </p>
            </Style.MainSectionFeaturesItem>
            <Style.MainSectionFeaturesItem>
                <img src={ iconSecurity } alt="Chat Icon" /> 
                <h3>Security you can trust</h3>
                <p>
                    We use top of the line encryption to make sure your data and money
                    is always safe.
                </p>
            </Style.MainSectionFeaturesItem>
        </Style.MainSectionFeatures>
    );
}
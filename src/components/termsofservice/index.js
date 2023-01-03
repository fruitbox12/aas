import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   textDialog: {
      whiteSpace: "break-spaces",
      [theme.breakpoints.down('xs')]: {
         fontSize: 16
      }
   }
}))

export default function ScrollDialog(props) {
   // const [open, setOpen] = useState(true);
   // const [scroll, setScroll] = useState("paper");
   const [scrollBottom, setScrollBottom] = useState(false);
   const history = useHistory();
   const account = useSelector((state) => state.account);
   const classes = useStyles();

   const open = true,
      scroll = "paper";

   // const handleClickOpen = (scrollType) => () => {
   //   setOpen(true);
   //   setScroll(scrollType);
   // };

   const handleClose = (accepted) => {
      if (!accepted) {
         history.push("/home");
      } else {
         localStorage.setItem("TOSsigned", account.user.account);
         props.setModalOpen(false);
      }
   };
   const handleScroll = () => {
      const dialogContent = document.getElementById("scroll-dialog-content");
      let boundingClientDiff =
         dialogContent.getBoundingClientRect().bottom -
         dialogContent.getBoundingClientRect().top;
      let scrollHeightDiff =
         dialogContent.scrollHeight - dialogContent.scrollTop;
      // if scrolled to the bottom of the content
      if (boundingClientDiff + 10 >= scrollHeightDiff) {
         setScrollBottom(true);
      }
      // console.log("scrolling")
      // console.log(dialogContent.scrollHeight - dialogContent.scrollTop)
   };

   const descriptionElementRef = useRef(null);
   useEffect(() => {
      if (open) {
         const { current: descriptionElement } = descriptionElementRef;
         if (descriptionElement !== null) {
            descriptionElement.focus();
         }
         /* window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); */
      }
   }, [open]);

   return (
      <div>
         {/* <Button onClick={handleClickOpen("paper")}>Click for Terms of Service</Button> */}
         <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            id="scroll-dialog"
            disableEscapeKeyDown
            disableBackdropClick
            maxWidth={"lg"}>
            <DialogTitle id="scroll-dialog-title">Terms of Service</DialogTitle>
            <DialogContent
               dividers={scroll === "paper"}
               id="scroll-dialog-content"
               onScroll={handleScroll}>
               <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                  className={classes.textDialog}>
                  <span>
                     {`THE USE OF ZAP TOKENS FOR ANY PURPOSE INCLUDING ZAP TOOLS, SYSTEMS, METHODS 
AND RELATED APPLICATIONS

THIS IS AN IMPORTANT DOCUMENT AND WARRANTS YOUR CLOSE ATTENTION. YOU SHOULD
READ THESE TERMS AND CONDITIONS CAREFULLY. YOU WILL BE DEEMED TO HAVE READ,
UNDERSTOOD AND AGREED TO THESE TERMS AND CONDITIONS BY MAKING ANY PURCHASE
OF ZAP NETWORK ACCESS TOKENS (IRRESPECTIVE OF THE SELLER), USING ANY ZAP
TOKENS, OR USING ANY ZAP TOOLS OR ANY ZAP NETWORK RELATED APPLICATIONS,
SYSTEMS OR METHODS (COLLECTIVELY, “ZAP”).

IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, DO NOT PURCHASE OR USE
ANY ZAP.

Zap Tokens are tokenized, digital, cryptographic software assets, in units called Network Access
Tokens (“Network Access Tokens” or “Zap Tokens”) which represent licenses to use our
software technology, systems and methods and access the Zap Network (the “Network’).

Your purchase, possession and use of Zap Tokens is subject to these Terms and Conditions
(“Terms and Conditions,” or the “Terms’).

By virtue of any purchase of one or more Network Access Tokens, whether from Synapse
Foundation at any time (whether or not during any Sale Period) and/or any subsequent
acceptance, or possession or use of the Network Access Tokens and/or the platform tokens
issuable upon exchange or conversion of the Network Access Tokens (the “Network Access
Tokens’ and the aforementioned platform tokens, collectively, the “Tokens’”) within or in
connection with the Network and/or Software (as defined below), you agree to and will be bound
by these Terms and Conditions, and all terms incorporated by reference.

The Terms and Conditions stipulate the following:

Separate License Agreement Controls

As stated in the preamble above, the Tokens represent tokenized licenses to use our software
technology. All Tokens and all purchases, possession and use thereof are and shall remain
subject to the Network Access End User License Agreement (the “License Agreement”)
between you and the Foundation. In the event of any conflict between these Terms and
Conditions and the License Agreement, the provisions, terms and conditions of and definitions
made within the License Agreement shall control.

Purpose and Intended Use of Tokens in Connection with the Network

The Tokens are tokenized software to which license rights attach and are inseparable. The
Tokens have been designed to be functional utility digital units. The Tokens are intended to be
used for the purchase and subsequent use of products and services within a network and/or
marketplace (the “Network”; all of the foregoing services, and any other services or products
subsequently conceived, developed, commercialized or otherwise presented to the market, or in
progress, the “Services’”), as presented by the Foundation and its affiliates (the “Affiliates”).
Affiliates include the companies with which the Foundation has contracted to license and
develop certain blockchain technology and other technological systems, methods, procedures,
processes, calculations, formulae, algorithms, theories, concepts and knowhow. The
aforementioned platform tokens to which Network Access Tokens may be converted into have
no utility or value outside the Network.

The Services and Tokens, and any component software (all of the foregoing, collectively,
“Software”), shall include code, calculations, algorithms, formulae, systems, methods, theories,
text, audio, visual representations or simulations, approximations, likenesses, and related
features. Any and all of the foregoing are subject to ongoing revision, creation, modification and
other changes, which may occur with or without notice to you. The Tokens and Software should
be presumed to be subject to ongoing revision, development, updating, modification and other
changes, which may occur with or without any notice to you. No release of Software in either
“completed” or “beta” form, or any action to release or make available to any user and/or the
general public for either limited testing, general testing, limited use or general unrestricted use,
shall prevent, preclude or restrict the Foundation or its Affiliates from updating, revising,
modifying, suspending or taking any other action with such Software or impose any notice
requirement. In any event, you take and use any Tokens, Software or Network on an “AS |S”
and “AS AVAILABLE” basis and with full knowledge of and assumption of the various risks
inherent in rapidly-emerging technologies such as blockchain technology and cryptography. The
Foundation and/or its Affiliates reserve the absolute right to develop, change, modify, update,
derive or revise, as the case may be, any and all of the Zap Tokens, the Software, the Services
and any component thereof, at any time and to release same for testing, limited or controlled
use, special licensing, with or without any notice to you.

If you are uncomfortable with or unwilling to assume these risks, do not purchase or use the Zap
Tokens.

Disclaimer Of Other Rights of Ownership

Ownership and possession of Tokens carries the right to use Tokens to purchase Services, and
to facilitate the use, enjoyment and exploitation of the associated technology within the Network
to the extent of the Network’s functionality and capacity, and to the extent specified elsewhere in
these Terms.

However, possession of either the Tokens or platform tokens does not grant or convey any
rights: (i) to share in, receive or otherwise participate in dividends or distributions of income,
gain or profits from, or redeem any right, instrument or asset of, the Foundation or its affiliates,
(ii) benefit from, share in, receive or otherwise participate in any capital appreciation in or of the
Foundation or its affiliates, (iii) benefit from, share in, receive or otherwise participate in any
distribution of any assets upon a liquidation or dissolution of the Foundation or its affiliates; (iv)
as either a shareholder, noteholder, bondholder or creditor of the Foundation or its affiliates; (v)
to participate in any other transaction of the Foundation or its affiliates, other than ordinary
commercial transactions as a retail customer; (vi) consisting of any additional or future rights,
benefits or privileges in the Foundation or its affiliates, including any rights in the future
development of the Foundation or its affiliates or any rights to any intellectual property or trade
secrets of the Foundation or its affiliates, except the License granted under this Agreement; (vii)
to refund, redeem or sell back an unused token or anything else which could be received upon
conversion, exercise, purchase or redemption of such tokens, or any part thereof, (viii) to
refunds, redemption rights, conversion rights, credits, exchanges or any other compensation, or
to any new license or new Token, for any reason, including if any token’s conversion or
exchange or “mining” right should expire or be terminated; (ix) to receive or accept any
ownership right or stake, share or security or equivalent rights, or any right to receive future
revenue shares, intellectual property rights or any other form of participation in or relating to the
Foundation and its corporate affiliates, other than rights relating to the receipt of and use of the
Services, subject to limitations and conditions in these Terms.

You further agree and acknowledge that the Tokens are only intended for the use, enjoyment
and exploitation of the associated Software within the Network to the extent of the Network’s
functionality and capacity, and as further specified in these Terms.

Representations and Warranties

By purchasing or using any Tokens, you irrevocably represent and warrant, declare and reaffirm
that: (a) You have read and understand these Terms (including all Exhibits); (b) You have a
sufficient understanding of the functionality, usage, storage, transmission mechanisms and
other material characteristics of digital assets or cryptographic assets or units (e.g., Bitcoin or
Ether), token storage mechanisms (such as token wallets or vaults), blockchain technology and
blockchain-based software systems, to understand these Terms and to comprehend, agree to
and assume the risks of purchasing Tokens; (c) You understand the restrictions and risks
associated with the purchase, holding and use of cryptographic assets (of which the Tokens are
one) including assets based upon blockchain technology, decentralized ledger technology or
distributed ledger technology, and including what are generally understood to be
“cryptocurrencies’ irrespective of the assets’ ability, suitability or functionality to actually be used
by anyone in any jurisdiction as a store of value or medium of exchange, and you acknowledge
and assume all such risks; (d) You understand, acknowledge and assume the risks associated
with the purchase, possession, deployment or use and, if applicable, any transfer, disposition or
sale of, the Tokens, the platform tokens, the Services and the Network; (e) You understand that
Tokens are intended to have a functional utility to access the Network and receive and use
Services; (f) You acknowledge and agree that you are not purchasing or using Tokens for any
other purposes; (g) Your purchase or use of Tokens does not violate applicable law and
regulation in your jurisdiction, including, but not limited to, (i) legal capacity (e.g., age
restrictions) and any other applicable legal requirements in your jurisdiction for purchasing,
possessing or using Tokens, and entering into contracts with us, (ii) any foreign exchange or
regulatory restrictions applicable to such purchase, and (iii) any governmental or other licenses,
permits, consents or waivers that may need to be obtained; (h) Your purchase or use of Tokens
does not infringe upon or violate the rights of any third party; (i) You will comply with any
applicable tax obligations in your jurisdiction arising from your purchase of Tokens; (j) If you are
purchasing Tokens on behalf of any entity, that you are duly authorized to accept these Terms
as the entity’s agent and on such entity's behalf and that such entity will be responsible for
breach of these Terms by you or any other employee or agent of such entity (references to
“you” in these Terms refer to you and such entity, jointly); (k) You are not a citizen or resident of
the United States, an entity which is organized or exists under the laws of any State within the
United States, or a domestic estate or a trust in which one or more of the foregoing persons has
a cumulative direct or indirect beneficial interest in excess of 50 percent of the value of the trust;
(I) You are not (i) a citizen or resident of a jurisdiction in which access to or use of the Services
or Network is prohibited by applicable law, decree, regulation, treaty, or administrative act, (ii) a
citizen or resident of, or located in, a geographic area that is subject to United States or other
nations’ sanctions, prohibitions, restrictions or embargoes, or (iii) an individual, or an individual
employed by or associated with an entity, identified on the U.S. Department of Commerce’s
Denied Persons or Entity List, the U.S. Department of Treasury’s Specially Designated
Nationals or Blocked Persons Lists, or the U.S. Department of State’s Debarred Parties List; (m)
You are purchasing the Tokens for your own account and not for the account of any other
person or entity, except as provided for in clause (n); and (n) If you are purchasing the Tokens
and/or intending to use the Services on behalf of a legal entity, you further represent and
warrant that (i) such legal entity is duly organized and validly existing under the applicable laws
of the jurisdiction of its organization, and (ii) you are duly authorized by such legal entity to act
on its behalf.

General Disclaimers Regarding The Terms; Amendments

(a) The Foundation expressly disclaims any and all responsibility for any direct, indirect or
consequential loss or damage of any kind whatsoever, whether arising either directly or
indirectly from: (i) reliance on any information contained herein, (ii) any error, omission,
inaccuracy or ambiguity in any such information, whether in existence at the time of purchase or
subsequently occurring due to technological advances, changing market conditions or
contingencies previously unanticipated, or (iii) any action, inaction, circumstance or
consequence resulting from or caused by such information.

(b) We do not recommend, endorse, approve or ratify your selection, usage, deployment or
other action regarding any wallet, vault or other storage medium, system or method you employ
to receive, accept, retain, possess or store Tokens, any internet service provider or portal you
choose to access the internet, or any computing device you choose through which to access the
internet. You bear the full responsibility for choosing such medium, system or method, using
such medium, system or method for its intended usage and within any applicable guidelines,
terms, conditions and best practices, and choosing, implementing, updating and executing
reasonable measures for securing the wallet, vault or other storage mechanism you use to
receive and hold any Tokens you purchase from us, including your decisions to accept, hold,
retain, use and secure any requisite private key(s) or other credentials necessary to access
such storage mechanism(s) and/or validate or verify your identity as the holder thereof. If your
private key(s) or other access credentials are lost, you may lose access to your Tokens, either
temporarily or permanently. Your ownership, possession and use of the Tokens and the
Software are your responsibility. We disclaim any and all responsibility and liability for any
losses, however caused. By purchasing the Tokens (whether from the Foundation or any third
party), you expressly acknowledge and agree to our disclaimer and further acknowledge your
assumption of all the risks of holding or using cryptographic, blockchain-technology based,
distributed-ledger-technology based or decentralized-ledger-based assets.

(c) We may add, delete, revise, update or otherwise modify terms or policies to the Terms in our
sole discretion, with or without warning to You. Your purchase of Tokens from us during the
period of any sale is final. There are no refunds or cancellations except as may be required by
applicable law or regulation. We reserve the right to refuse or cancel Token purchase requests,
or suspend, cancel or discontinue any token sale, at any time in our sole discretion.

(d) TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW AND EXCEPT AS
OTHERWISE SPECIFIED IN AN AUTHORIZED DOCUMENT ISSUED, EXECUTED AND
DELIVERED BY US, (A) THE TOKENS ARE SOLD ON AN “AS IS” AND “AS AVAILABLE”
BASIS WITHOUT WARRANTIES OF ANY KIND, AND WE EXPRESSLY DISCLAIM ALL
IMPLIED WARRANTIES AS TO THE TOKENS, THE SOFTWARE OR THE NETWORK,
INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, (B) WE DO
NOT REPRESENT OR WARRANT THAT THE TOKENS, SOFTWARE OR NETWORK ARE
ERROR-FREE, OR RELIABLE, MEET YOUR REASONABLE REQUIREMENTS OR
EXPECTATIONS, OR THAT DEFECTS OR ERRORS IN THE TOKENS, SOFTWARE OR
NETWORK WILL BE CORRECTED OR COMPENSATED FOR; AND (C) WE CANNOT AND
DO NOT REPRESENT OR WARRANT THAT EITHER THE TOKENS OR THE PLATFORM
TOKENS, OR ANY DELIVERY MECHANISM OR STORAGE MECHANISM OR TRANSFER
MECHANISM FOR TOKENS (IRRESPECTIVE OF THE PARTY WHICH DESIGNED,
CREATED OR HOSTED THEM, AS TO WHICH WE DISCLAIM ALL RESPONSIBILITY FOR)
ARE FREE FROM DESIGN DEFECTS, MISTAKES, ERRORS, COMPUTER CODE FLAWS,
DESIGN OR OPERATION VULNERABILITIES, VIRUSES OR OTHER MALICIOUS OR
HARMFUL COMPONENTS. YOU ALSO ACKNOWLEDGE THAT ANY INFORMATION THAT
YOU STORE OR TRANSFER USING THE TOKENS, SOFTWARE OR NETWORK MAY
BECOME IRRETRIEVABLY LOST OR CORRUPTED, IRREVERSIBLY DAMAGED OR
DESTROYED, OR TEMPORARILY UNAVAILABLE DUE TO ANY NUMBER OF CAUSES,
INCLUDING SOFTWARE FAILURES, THIRD PARTY PROTOCOL CHANGES, INTERNET
OUTAGES, THIRD PARTY DENIAL OF SERVICE ATTACKS, NATURAL DISASTERS, ACTS
OF WAR, ACTS OF TERRORISM, ACTS OF GOD OR UNSCHEDULED MAINTENANCE. YOU
ARE ENCOURAGED TO BACK UP AND SAFEGUARD YOUR INFORMATION, INCLUDING
BUT NOT LIMITED TO LOGIN CREDENTIALS, AT ALL TIMES.

(e) Some jurisdictions do not allow the exclusion of certain warranties or disclaimer of implied
terms in contracts with consumers, so some or all of the exclusions of warranties and
disclaimers in this section may not apply to you. Nevertheless, the exclusions and disclaimers
contained herein shall be effective to the fullest extent of applicable law.

Risks and Your Assumption of These Risks

(a) You acknowledge and agree, and represent and warrant that you so acknowledge and
agree, that there are risks associated with your decisions to purchase, possess, hold or use the
Tokens, whether for their intended use or for any other purpose, the platform tokens, the
Services including, without limitation, the Software and the Network, and your decisions to
participate in the Network’s Marketplace, and by purchasing Tokens, you expressly
acknowledge, assume and accept these risks. If you do not agree to assume all of these risks
(as well as other risks not specifically enumerated herein), you should not purchase, possess or
use the Tokens.
(b) By purchasing, holding and/or using Tokens, you expressly acknowledge and assume, and
by each subsequent purchase and/or use of Tokens, you reacknowledge and reaffirm your
understanding and assumption of, the risks involved in your purchase. We disclaim any and all
responsibility and liability for any losses, however caused. By purchasing the Tokens, you
expressly acknowledge and agree to our disclaimer and further acknowledge your assumption
of risk.

(c) Wallets and Storage Media. Your selection, usage, deployment or other action regarding
any wallet, vault or other storage medium, system or method you employ to receive, accept,
retain, possess or store Tokens carries with itthem a variety of risks. A storage medium may
use passwords, a private key or a combination of private keys, or other encryption devices to
control and dispose of Tokens stored in your storage medium (e.g., digital wallet, vault). We do
not endorse or recommend any particular type, design or custodian of any such storage
medium. You bear the full responsibility for choosing such medium, system or method, using
such medium, system or method for its intended usage and within any applicable guidelines,
terms, conditions and best practices, and choosing, implementing, updating and executing
reasonable measures for securing the wallet, vault or other storage mechanism you use to
receive and hold any Tokens you purchase from us, including your decisions to accept, hold,
retain, use and secure any requisite private key(s) or other credentials necessary to access
such storage mechanism(s) and/or validate or verify your identity as the holder thereof. If your
private key(s) or other access credentials (such as through private keys or other media) are lost,
you may lose access to some or all of your Tokens, either temporarily or permanently. If an
unauthorized third party gains (and misuses without authorization) those access credentials,
you may also lose access to some or all of your Tokens, and may sustain the risk of losing
some or all of your Tokens if they are transferred or otherwise misappropriated, and you may
not be able to recover those Tokens. Accordingly, loss of requisite private key(s) associated
with your digital wallet or vault storing Tokens will likely result in your loss of all such Tokens.
Moreover, any third party that gains access to such private key(s), including by gaining access
to login credentials of a digital wallet or vault service you use, may be able to misappropriate
your Tokens. Any errors or malfunctions caused by or otherwise related to the digital wallet or
vault you choose to receive and store Tokens, including your own failure to properly maintain or
use such digital wallet or vault, or your mistakes or failures to provide the wrong address for
receiving Tokens, may result in the loss of and inability to recover your Tokens. Your ownership,
possession and use of the Tokens and the Software are your responsibility.

(d) Ethereum Specific Risks. The Tokens are currently based on an Ethereum protocol,
ERC-20. Despite the widespread use and adoption of said protocol within the blockchain
technology industry, such protocol is not perfect and may sustain, feature or suffer third-party
attacks, malfunctions, design defects, human error or other unanticipated events which could
have a material adverse effect on the Tokens, Software or Network. Any successful attacks
present a risk to the Network and Tokens, including, but not limited to, accurate execution and
recording of transactions involving Tokens. Moreover, future improvements, advances or
modifications in cryptographic technology, protocols or other technological advances could
present additional risks to Tokens, Software or Network, including obsolescence, deteriorating
utility of Tokens for obtaining Services or reduced cryptographic consensus if enough users stop
using the Ethereum protocol, the value of consensus among protocol users declines, the value
of incentives among “miners” decreases and results in a substantial loss of support among
miners supporting the protocol, or new technologies or protocols supplant the Tokens, Software
or Network.

(e) Hacking and Other Third Party Attacks. Computer systems and software, including the
Tokens, Software and Network, are generally subject to attack by third parties for a variety of
reasons and in a variety of methods (including methods we may not detect or which have
generally not been discovered). These methods are believed to be constantly evolving and
changing, making detection, deterrence and protection both difficult and also constantly evolving
and changing. Such attacks may interfere with the Tokens, Software or Network in a variety of
ways, including, but not limited to, malware attacks, denial of service attacks, consensus-based
attacks, Sybil attacks, smurfing and spoofing, and the potential damages from such attacks
(whether or not successful) can be substantial if not extreme. There is also the risk that any
party involved with the creation, design, operation, supervision or auditing of the Tokens,
Software or Network could be involved in human error, mistake, negligence, carelessness,
suffer from fatigue or other performance deterioration, or in malicious or unauthorized activity, of
which a result or consequence could be the intentional or unintentional lowering of designed
safeguards (which may not work against all attacks, in any event) or other protective barriers,
introduction of vulnerabilities or weaknesses (whether one-off mistakes or systemic) into the
computer code, cryptography, core infrastructure or third-party-produced software or hardware
used by or within the Tokens, Software or Network, any of which could negatively (and
substantially) affect the Tokens, Software or Network and in any event diminish or substantially
reduce the Tokens’ utility or value.

(f) External Transfers. The Tokens are intended to be used solely on the Network. The
Foundation does not endorse nor recommend any use of the Tokens beyond their intended use.
If you engage in external transfers with, or buying and selling with third parties of Tokens, and
use the services of a third party exchange or wallet, such exchanges may be relatively new,
unproven and subject to little or no regulatory oversight, making them more susceptible to
market-related as well as uncertain technological risks. Any of these exchanges or other
third-party media can be subject to the same technological risks as the Tokens, and these risks
may impair your ownership, ability to use and the value of any Tokens you hold.

(g) Uncertain, Inconsistent and Potentially Adverse Legal and Regulatory Enforcement
Environment.

The regulatory status of Tokens, decentralized peer-to-peer consensus-based networks and
blockchain, or distributed ledger, technology is evolving, inconsistent among jurisdictions and
unclear or unsettled in most other jurisdictions. It is difficult to predict how or whether regulatory
agencies may apply existing regulations with respect to such technology and its applications. It
is likewise difficult to predict how or whether legislatures or regulatory agencies may implement
changes to laws and regulations affecting distributed ledger technology and its applications,
including the Network and Tokens, or how courts may rule as to the legality of such laws and
regulations. Regulatory actions could negatively impact the Network and Tokens in various
ways, including, for purposes of illustration only, through a determination that tokenized digital
assets (which may be ruled to include the Tokens) are subject to regulation as a regulated
financial instrument, commodity or other product or service and thus requires registration,
licensing or other approval, and some or all of such requirements may have an adverse effect
upon either the Foundation’s ability to operate, develop, sustain or modify its Tokens, Software
or Network, or curtail it altogether or make it prohibitively expensive or otherwise inadvisable or
impractical to operate or permit the use of the Tokens, Software or Network in certain
jurisdictions, and in some jurisdictions it is possible blockchain technology or its applications
(including the Tokens) could be strictly curtailed or prohibited from certain or all uses altogether.
The Foundation may cease operations in a jurisdiction in the event that regulatory actions, or
changes to law or regulation, make it illegal to operate in such jurisdiction, or commercially
undesirable or impractical to obtain the necessary regulatory approval(s) to operate in such
jurisdiction.

The Tokens and the Services generally are or may be subject to a variety of laws and
regulations in various jurisdictions, including those with respect to consumer privacy, data
protection, consumer protection, content regulation, network neutrality, cybersecurity, data
protection, intellectual property (including copyright, patent, trademark and trade secret laws),
defamation, child protection, and others. These laws and regulations, and the interpretation or
application of these laws and regulations or their enforcement by the courts of proper
jurisdiction, could change. In addition, new laws or regulations affecting the Foundation or its
technology or industry could be enacted which could adversely affect the industry generally, the
Foundation specifically or Foundation customers specifically. These laws and regulations are
frequently costly to comply with and may divert a significant portion of Foundation’s attention
and resources. If we fail to comply with these applicable laws or regulations, we could receive
negative publicity and be subject to significant liabilities which could adversely impact the
Foundation and the value or utility of the Tokens or the Services.

(h) Competition. Competition in any new or emerging technology or industry poses a risk to
any established market participant. Other competitors, perhaps situated in jurisdictions with
more favorable legal or regulatory environments and/or assistance or subsidization from those
jurisdictions’ governments, educational, scientific or military institutions, may have greater
resources and/or capacity to develop technologies and consumer solutions that are competitive
with the Foundation’s solutions, whether in the present or in the future. Other competitors may
have access to greater financing to develop competitive technologies and applications. There
can be no assurance the Foundation will be able to maintain any competitive advantage with
regards to its innovations, creations and strategies.

(i) Possible Diminished Interest. The Foundation’s technology is relatively new, relatively
unproven over a long period of time and has an uncertain and unpredictable future. It is possible
that the Software and Network will not be adopted or used by a large number of individuals,
companies and other entities or that there will be limited public interest (in the sense of either
narrow interest, or wider interest which is not as sustained or prolonged) in the creation and
development of the technology generally. Any such limited use or interest or inability to sustain
such use or interest could negatively impact the development of the Software and Network and
adversely affect the potential utility of Tokens, including the utility for obtaining any Services
using Tokens or platform tokens.
(j) Rapid Technological Development. The Foundation’s technology is still relatively new and
under development. It may undergo significant changes, revisions, modifications and additions
over time. These changes may affect the functionality of the Tokens or platform tokens, the
Software or Network, and may affect customers’ perceived or actual utility of their Tokens. While
there may be any number of legitimate reasons for these or other changes, or for the
discontinuation or suspension of certain products or services, such changes or actions may
reduce the utility of the Tokens, Software or Network or adversely affect the consumer
experience with our products and services. These changes could create the risk that the
Tokens, Software or Network, whether or not further developed, modified and maintained, may
not meet your expectations at the time of purchasing Tokens. Furthermore, despite our good
faith efforts to develop and maintain the Software and Network, it is still possible that the
Tokens, Software and/or Network will experience malfunctions, defects, partial obsolescence or
otherwise fail to be adequately developed or maintained, which may negatively impact the
potential utility of your Tokens.

(k) Macroeconomic Factors That May Impact Development; Exchange Rate; Token Sale
Payments in Ether; Need To Convert To Fiat Currency To Pay Expenses. The Foundation’s and
its Affiliates’ development activities regarding the Tokens, the Software and the Network may be
affected by a wide range of macroeconomic factors such as but not limited to, fiat currency
value fluctuations, inflation in one or more markets, commodity price fluctuations, changing
regulations or tariffs, changing immigration laws, travel restrictions or other actions, events or
circumstances which may materially impair, impact or restrict the ability to conduct development
activities or other business activities in one or more markets, regions or countries. The
Foundation intends to use the proceeds from selling any Tokens for essentially the same
purposes which software developers customarily have when they sell their software products,
which is to fund the maintenance and continued development of its technologies, develop new
uses and applications, promote the technology as well as for other customary and ordinary uses
including general administrative and operating expenses and legal and regulatory compliance
expenses. These expenses will be expected to be paid mostly in fiat currencies, necessitating
the Foundation’s anticipated conversion of the digital asset Ether or any other asset it accepts,
in its sole discretion, as payment for its Tokens into fiat currencies acceptable for payment of its
expenses. Any such digital asset may be subject to price fluctuations, and this volatility may
mean the Foundation may convert its digital asset holdings into fiat currency for less than what it
could get at an earlier time. Any material decline in the value of any accepted digital asset will
likely adversely affect the Foundation’s holdings and any substantial, prolonged decline in the
value of a digital asset may adversely affect the Foundation’s ability to engage in its
development activities as currently planned. However, other factors including currently
unanticipated changes in overall industry technological development, customer demand or other
factors presently unknown can also affect these plans.

(I) Taxation and Uncertain Treatment. The tax characterization of Tokens is uncertain in many
jurisdictions, and tax laws, rules and regulations are generally subject to change upon little or no
notice. You must seek your own tax advice in connection with purchasing Tokens, which may
result in adverse tax consequences to you, including withholding taxes, income taxes and tax
reporting requirements.
(m) Possible Discontinuation of Some or All Operations; Possible Dissolution. It is possible that,
due to any number of legitimate reasons, including, but not limited to, an unfavorable fluctuation
in the value of Ether or other cryptographic and fiat currencies, general economic conditions
(either in a given jurisdiction or worldwide), rapid technological developments, legal or
regulatory treatment changes adversely affecting either the Foundation or its customers, a
decrease in the Token’s utility (including its utility for obtaining Services), the failure of
commercial relationships, or intellectual property ownership challenges, the Foundation may
find it impractical to continue its development activities and the Foundation may either curtail its
operations, discontinue prior operations or even suspend all operations or dissolve.

(n) Tokens Carry No Voting or Management Rights. The Tokens confer no rights to participate
in voting or governance of the Foundation or any Affiliate. This means holders of Tokens shall
have only the rights of software consumers and absolutely no rights to participate in the
management or governance or oversight of the Foundation, irrespective of a holder's quantity of
Tokens owned. All decisions involving the Foundation will be made by the Foundation’s
management at its sole discretion, including, but not limited to, decisions to discontinue the
Network, to sell more Tokens for use in the Network, or to sell or liquidate the Foundation.
These decisions could adversely affect the Network and the utility of Tokens that you hold,
including Tokens’ utility for obtaining Services.

(0) Uninsured Tokens. The Tokens and Software are uninsured unless you specifically obtain
private insurance to insure them. You will bear the risk of loss absent such insurance.

Indemnification. To the fullest extent permitted by applicable law, you will indemnify, defend and
hold harmless the Foundation and its Affiliates and any of their respective employees, officers,
directors, contractors, consultants, equity holders, lenders, creditors, suppliers, vendors, service
providers, parent companies, subsidiaries, affiliates, agents, representatives, attorneys,
predecessors, successors and assigns (collectively, the “Indemnified Parties”) from and against
all claims, demands, actions, damages, losses, costs and expenses (including attorneys’
fees)(collectively, “Claims’”) that arise from or relate to: (i) your purchase, possession, use, loan,
pledge, hypothecation, resale or transfer of Tokens, (ii) your responsibilities or obligations under
these Terms, (iii) your violation of these Terms, (iv) your violation of any law, regulation, rule,
statute, ordinance or decree, in any jurisdiction, or (iv) your violation of any rights of any other
person or entity, whether contractual or pertaining to intellectual property or trade secrets, or
otherwise. The Foundation reserves the right to exercise sole control over the defense, at your
expense, of any Claim subject to indemnification under these Terms. Furthermore, to the fullest
extent permitted by applicable law, you release the Foundation and the other Indemnified
Parties from responsibility, liability, claims, demands and/or damages (actual and
consequential) of every kind and nature, Known and unknown (including, but not limited to,
claims of negligence), arising out of or related to Claims including disputes between users and
disputes involving alleged acts or omissions of third parties or governmental entities.

Requests For Personal Information

We may determine, in our sole discretion, that it is necessary to obtain, and to seek to obtain,
certain information about you in order to comply with applicable laws or regulations in
connection with selling Tokens to you or your use of the Tokens, Network or Software. You
agree to provide us such information promptly upon our request. You acknowledge and agree
that we may refuse to sell Tokens to you until you provide such requested information and we
have determined, in our discretion, that it is permissible to sell you Tokens under applicable
laws or regulations.

Taxes

The purchase price for Tokens is exclusive of all applicable taxes. You are solely responsible
for determining what, if any, taxes apply to your purchase of Tokens, including, for example,
sales, use, value added taxes and any other taxes, levies, duties, charges, fees or other
assessments or penalties. It is solely your responsibility to withhold, collect, report and remit the
correct taxes to the appropriate tax authorities. We are not responsible for withholding,
collecting, reporting, or remitting any sales, use, value added, or similar tax arising from your
purchase of Tokens.

Consumer Relationship Defined; No Third Party Beneficiary Rights. Your purchase of Tokens
or use of the Tokens, and associated platform tokens, the Services, Software and Network do
not create any relationship beyond that of vendor and vendee, or retailer-seller and
consumer-customer. Except as otherwise provided in herein, these Terms are intended solely
for the benefit of you and us and are not intended to confer third-party beneficiary rights upon
any other person or entity.

Severability

If any term, clause or provision of these Terms is held unlawful, void or unenforceable, then that
term, clause or provision will be severable from these Terms and will not affect the validity or
enforceability of any remaining part of that term, clause or provision, or any other term, clause or
provision of these Terms.

Governing Law and Venue; Arbitration

These Terms will be governed by and construed and enforced in accordance with the laws of,
and all disputes hereunder shall be subject to the jurisdiction of courts located in, Isle of Man,
without regard to conflicts of law rules that would cause the application of the laws of any other
jurisdiction. Notwithstanding this section, you agree to use your best faith efforts to resolve any
dispute or claim, and mitigate any and all asserted damages, prior to initiating any grievance
proceeding, claim or other action in any venue. In addition, any claim or action not initiated
within one year of the date of the occurrence from which the claim or action is alleged to have
arisen shall be time-barred. You also hereby waive and relinquish all rights to pursue any claim
in any court, including as a “class action,” and further agree to pursue any claim, action or
grievance pursuant to any arbitration proceedings available in Isle of Man or such other
jurisdiction as the Foundation may determine.
Miscellaneous

(a) The Terms constitute the entire agreement between you and us relating to your purchase of
Tokens from us.

(b) The Terms may be amended from time to time, in our sole discretion or as may be
reasonably required, in our discretion, to comply with applicable law or regulation and without
warning or notice to you.

(c) We may assign our rights and obligations under these Terms.

(d) Our failure or decision to decline to exercise or enforce any right or provision of these Terms
will not operate as a waiver of such right or provision.

(e) You agree and acknowledge that all agreements, notices, disclosures, and other
communications that we provide to you, including these Terms, will be provided in electronic
form.`}
                  </span>
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={() => handleClose(false)} color="primary">
                  Cancel
               </Button>
               <Button
                  onClick={() => handleClose(true)}
                  color="primary"
                  disabled={!scrollBottom}>
                  Accept
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

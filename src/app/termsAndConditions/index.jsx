import React, { useMemo, useState } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    Drawer,
    IconButton,
    AppBar,
    Toolbar,
    Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DeepSurfLogo from "../../assets/icons/deepSurf-lgo.svg"

const TermAndCondition = () => {
    const [activeSectionId, setActiveSectionId] = useState(1);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const sections = [
        {
            id: 1,
            title: "DeepSurf – Risk Disclosure Statement",
            content: [

                `Last updated: 10 December 2025`,
                `This Risk Disclosure Statement (“Disclosure”) is provided by ILIA BONDARCHUK PR IZDAVANJE SOFTVERA DEEPSURF NOVI SAD, a sole proprietorship organized under the laws of the Republic of Serbia, registration number 68354633, tax identification number 115422699, with its registered seat at Ćirila i Metodija 1, 21000 Novi Sad, Republic of Serbia (“DeepSurf”, “we”, “us” or “our”), to ensure that users understand the significant risks associated with accessing, viewing or relying upon analytics, quantitative models, indicators, market data, artificial intelligence outputs, or any other information made available through the DeepSurf platform (the “Platform”).This Disclosure forms an integral part of the Terms of Use and should be read carefully before using the Platform. By accessing or using the Platform, you acknowledge that you have reviewed, understood and accepted the risks described below. If you do not agree with this Disclosure, you must not use the Platform.`,
                `1. No investment, financial or trading advice`,
                `1.1 The Platform provides analytics, data visualizations, model outputs, risk estimates, scenario analysis, probability indicators, market intelligence tools and related information. All such content is provided solely for informational and educational purposes.`,
                `1.2 Nothing on the Platform constitutes or should be construed as:`,
                `a) financial, investment, legal, tax or accounting advice`,
                `b) a recommendation or solicitation to buy, sell or hold any financial instrument, security, digital asset or derivative`,
                `c) an endorsement of any trading strategy, leverage profile or execution method`,
                `d) a guarantee of any trading outcome, profit or avoidance of loss.`,
                `1.3 DeepSurf does not act and will not be deemed to act as a broker dealer, investment adviser, commodity trading adviser, futures commission merchant, portfolio manager, custodian, fiduciary or agent with respect to any user or any transaction.`,
                `2. Risks related to digital assets and financial markets`,
                `The markets for digital assets, derivatives and traditional financial instruments carry substantial risks, including but not limited to the following`,
                `2.1 Market risk`,
                `a) Prices of digital assets and derivatives can fluctuate dramatically within very short periods of time.`,
                `b) Markets may experience sudden liquidity shortages, order book gaps, trading halts, flash crashes and extreme volatility.`,
                `c) Price movements may be influenced by macroeconomic events, central bank actions, regulatory changes, market sentiment, technical factors, technology failures or actions taken by large market participants.`,
                `2.2 Volatility and leverage risk`,
                `a) Leveraged trading can magnify both gains and losses. A relatively small movement in price may result in a disproportionately large loss.`,
                `b) You may incur losses that exceed your initial capital, collateral or margin, and you may be required to deposit additional funds on short notice.`,
                `c) Failure to meet margin calls can result in forced liquidation of positions at unfavorable prices.`,
                `2.3 Liquidity risk`,
                `a) Certain assets may have limited trading volume, wide spreads or insufficient depth of market.`,
                `b) In stressed conditions you may be unable to enter or exit a position at a desired price or time.`,
                `c) Large orders can move prices significantly and may incur substantial slippage`,
                `2.4 Counterparty and exchange risk`,
                `a) Trades executed on third party platforms involve the risk of default, system failure, operational errors, insolvency, mismanagement or fraud on the part of such platforms or their operators.`,
                `b) Custodial, lending, staking, yield farming or similar arrangements involve the risk that the counterparty fails to return assets or honor its obligations.`,
                `c) DeepSurf does not execute trades, hold user funds, control third party venues or guarantee the performance of any counterparty or exchange.`,
                `2.5 Regulatory and legal risk`,
                `a) Digital asset regulation is evolving and may differ significantly across jurisdictions.`,
                `b) Legislative changes, enforcement actions, licensing requirements, restrictions or bans may adversely affect markets, access to trading venues and asset values.`,
                `c) Users remain solely responsible for understanding and complying with the legal, regulatory and tax implications of their trading and investment activities.`,
                `2.6 Technology and cybersecurity risk`,
                `a) Digital assets rely on distributed ledger technology, smart contracts, consensus mechanisms and cryptographic protocols that may fail, contain vulnerabilities or behave unpredictably.`,
                `b) Platforms, protocols, exchanges or wallets may be subject to cyberattacks, hacking, data breaches, key compromise, software bugs or operational disruptions.`,
                `c) Losses resulting from such incidents may be irreversible and may not be covered by insurance, compensation schemes or regulatory protection.`,
                `3. Risks related to analytics, models and artificial intelligence`,
                `3.1 Hypothetical nature of model outputs`,
                `a) Artificial intelligence models, backtests, forecasts, probability scores, risk indicators and scenario analyses rely on assumptions, historical data and statistical approximations.`,
                `b) They represent simulated or hypothetical scenarios that may not reflect actual market behavior or future conditions.`,
                `c) Past performance, whether actual or simulated, is not indicative of future results and should not be relied upon as a guarantee of performance.`,
                `3.2 Data quality limitations`,
                `a) DeepSurf sources data from multiple third party providers, exchanges and information services.`,
                `b) Data may be delayed, inaccurate, incomplete, corrupted, subject to revision or inconsistent across sources.`,
                `c) Model outputs and analytics may be adversely affected by data errors, delays, gaps or mispricing.`,
                `3.3 Model risk`,
                `a) Analytical and machine learning models may contain design errors, parameter mis-specification, implementation bugs or structural limitations.`,
                `b) Models may fail to predict turning points, extreme events, correlations, contagion effects or structural breaks in markets.`,
                `c) Changes in market microstructure, regulation, liquidity conditions or participant behavior may render previously effective models unreliable or invalid.`,
                `3.4 No guarantee of accuracy or suitability`,
                `a) DeepSurf does not warrant the accuracy, reliability, timeliness or completeness of any analytics, metrics, scores or information provided through the Platform`,
                `b) Analytics may conflict or provide different signals for the same instrument or time period.`,
                `c) Users should independently verify information and should not rely on any single indicator, signal or model when making trading decisions.`,
                `4. Risks related to user controlled API connections`,
                `4.1 Users may choose to connect third party exchange or brokerage accounts to the Platform via API keys or other integration methods. DeepSurf does not control and cannot review permissions, balances, margin settings or trading configurations associated with those accounts.`,
                `4.2 Incorrect API settings, including enabling trading or withdrawal permissions where not strictly necessary, may expose users to significant risk, including unauthorized transactions by malicious actors who gain access to the keys.`,
                `4.3 Users are solely responsible for securing API keys, limiting permissions, monitoring activity on connected accounts and revoking access when appropriate. DeepSurf is not liable for any loss arising from misuse, compromise or misconfiguration of API keys.`,
                `5. System, operational and connectivity risks`,
                `5.1 The Platform and underlying infrastructure may experience interruptions, delays, outages or errors due to, among other things:`,
                `a) scheduled or unscheduled system maintenance`,
                `b) hardware or software failures`,
                `c) internet or network congestion and routing issues`,
                `d) denial of service or other cyberattacks`,
                `e) malfunctions or downtime of third party service providers.`,
                `5.2 Such issues may affect the availability, accuracy or timeliness of analytics, data feeds and model outputs and may result in delayed, missing or inconsistent information.`,
                `5.3 Users who rely on the Platform while trading may be exposed to additional risk if they are unable to receive or process information at critical moments.`,
                `6. User responsibility`,
                `6.1 All trading and investment decisions are made at your own risk. Without limitation, DeepSurf is not responsible for:`,
                `a) any trading or investment losses incurred by you`,
                `b) any decisions made based on analytics, data, indicators or model outputs provided by the Platform`,
                `c) failures or errors in your trading strategies, risk management practices or execution processes`,
                `d) use of the Platform in connection with leveraged, illiquid or otherwise high risk instruments.`,
                `6.2 You should consult independent financial, tax and legal professionals before engaging in trading or investment activities and before relying on any information obtained from the Platform.`,
                `6.3 You must carefully consider your own financial situation, investment objectives, risk tolerance and level of experience and should only trade or invest capital that you can afford to lose.`,
                `7. No guarantees`,
                `DeepSurf does not guarantee and expressly disclaims any representation or warranty regarding:`,
                `a) profitability or avoidance of loss`,
                `b) accuracy, completeness, reliability or timeliness of data, analytics or model outputs`,
                `c) uninterrupted, secure or error free access to the Platform`,
                `d) suitability of any analytics or tools for your particular purposes, instruments or strategies`,
                `8. Acknowledgement`,
                `By accessing or using the Platform, you:`,
                `a) acknowledge that you have read and understood this Risk Disclosure Statement in full`,
                `b) accept and assume all risks described in this Disclosure, in the Terms of Use and in any other applicable policies`,
                `c) agree that DeepSurf, its owners, directors, officers, employees, contractors and data providers are not responsible for any losses, damages or liabilities arising from your use of the Platform or reliance on its analytics, whether direct or indirect.If you do not understand or do not accept the risks described above, you must not use the Platform.`,
                `Contact`,
                `If you have any questions regarding this Disclosure, you may contact us at:`,
                `ILIA BONDARCHUK PR IZDAVANJE SOFTVERA DEEPSURF NOVI SAD`,
                `Ćirila i Metodija 1`,
                `21000 Novi Sad`,
                `Republic of Serbia`,
                `Phone: +381 61 2416 591`,
                `Email: support@deepsurf.io`



            ]
        },
        {
            id: 2,
            title: "DeepSurf - Terms of Use",
            content: [
                "Last updated: 10 December 2025",
                `These Terms of Use ("Terms") govern your access to and use of the DeepSurf platform, websites, applications, tools and related services (collectively, the "Platform"), which are operated by ILIA BONDARCHUK PR IZDAVANJE SOFTVERA DEEPSURF NOVI SAD, a sole proprietorship organized under the laws of the Republic of Serbia, registration number 68354633, tax identification number 115422699, with its registered seat at Ćirila i Metodija 1, 21000 Novi Sad, Republic of Serbia ("DeepSurf", "we", "us" or "our").`,
                `By creating an account, accessing or using the Platform, you acknowledge that you have read, understood and agree to be bound by these Terms, as well as our Privacy Policy and any other policies or notices provided to you (together, the "Agreement"). If you do not agree to the Agreement, you must not access or use the Platform.`,
                `The Platform is provided solely for informational and educational purposes. It does not constitute investment, financial, legal, tax or trading advice, and DeepSurf is not acting as your broker, dealer, investment adviser, commodity trading adviser, fiduciary or agent in any capacity.`,
                `1. Eligibility and user categories`,
                `1.1 You may use the Platform only if you:`,
                `a) are at least 18 years old or the age of legal majority in your jurisdiction, whichever is higher`,
                `b) have full legal capacity to enter into binding contracts`,
                `c) are not a resident, citizen or located in a jurisdiction where use of the Platform would be contrary to applicable law, regulation, sanctions or other governmental requirements`,
                `d) are not subject to any sanctions, embargoes or restrictions administered by the European Union, the United States, the United Kingdom, the United Nations or other relevant authorities.`,
                `1.2 By using the Platform, you represent and warrant that you meet all eligibility requirements. We may request information or documentation at any time to verify your eligibility and may suspend or terminate access if you do not provide satisfactory evidence.`,
                `2. Account registration and security`,
                `2.1 To access certain features of the Platform you must create an account. You agree to provide accurate, current and complete information during registration and to keep this information updated.`,
                `2.2 You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify us promptly if you suspect any unauthorized access or security breach.`,
                `2.3 DeepSurf may, at any time and in its sole discretion, refuse to open an account, suspend or close an account, or limit access to the Platform, including to comply with legal or regulatory obligations, internal risk policies or for security reasons.`,
                `3. Nature of services and no investment advice`,
                `3.1 The Platform provides analytics, quantitative models, risk calculators, market data visualizations, news aggregation and other tools relating to digital assets, derivatives, macroeconomic indicators and financial markets (collectively, "Analytics"). All Analytics and any content made available through the Platform, whether generated by algorithms, artificial intelligence models, third party data providers or DeepSurf personnel, are provided strictly on an informational and educational basis.`,
                `3.2 Nothing on the Platform constitutes:`,
                `a) investment, financial, legal, accounting or tax advice`,
                `b) a recommendation or solicitation to buy, sell or hold any security, digital asset, derivative or other financial instrument`,
                `c) an offer, solicitation or recommendation to use any particular trading strategy or to engage in any transaction.`,
                `3.3 Analytics may include scenario analysis, probability estimates, model outputs, risk scores, performance metrics, backtests, forecasts or signals. These are hypothetical in nature, based on historical data and assumptions, and do not guarantee any particular outcome. Past performance, whether actual or simulated, is not indicative of future results.`,
                `3.4 You are solely responsible for all investment and trading decisions. Before making any financial decision you should consult your own independent professional advisers and consider your financial situation, objectives, risk tolerance, tax position and legal obligations.`,
                `3.5 DeepSurf does not execute trades, custody assets, route orders, provide brokerage or dealing services, or operate as an exchange, trading venue, multilateral trading facility or organized trading facility. Any trading you perform is executed through third party platforms or counterparties of your choice, outside of DeepSurf’s control.`,
                `3.6 Nothing in the Platform or in these Terms creates a fiduciary relationship between you and DeepSurf.`,
                `4. Regulatory status and compliance`,
                `4.1 DeepSurf provides data analytics and software tools. Based on its current business model, DeepSurf does not hold itself out as, and does not act as:`,
                `a) an investment firm within the meaning of Directive 2014/65/EU (MiFID II)`,
                `b) a credit institution or payment institution`,
                `c) an investment adviser, broker dealer or futures commission merchant under United States law`,
                `d) a commodity trading adviser, commodity pool operator or money services business`,
                `e) a provider of custody, exchange or transfer services for digital assets.`,
                `4.2 DeepSurf monitors applicable laws and regulations in the European Union, the United States, the Republic of Serbia and other relevant jurisdictions. If regulatory classification of its services changes or if new licensing obligations arise, DeepSurf may adapt its operations, obtain licenses, restrict access from certain jurisdictions or discontinue parts of the Platform.`,
                `4.3 You are responsible for ensuring that your use of the Platform complies with all laws, regulations and rules that apply to you, including but not limited to financial services regulations, tax obligations, anti money laundering and counter terrorist financing requirements, sanctions and export control laws.`,
                `5. Market data, third party content and APIs`,
                `5.1 The Platform aggregates and processes data from multiple third party sources, including but not limited to exchanges, market data vendors, on chain data providers, news feeds and sentiment data providers. DeepSurf does not control and is not responsible for the accuracy, completeness, timeliness, reliability or availability of any third party data or content.`,
                `5.2 Any references to specific third party services, exchanges or platforms are provided only for functional or descriptive purposes and do not constitute endorsement, recommendation or guarantee of such third parties.`,
                `5.3 API integrations to exchanges or other platforms are provided solely for convenience. You are responsible for managing API keys, permissions and security settings with those third parties. DeepSurf does not assume responsibility for any loss or damage arising from use of third party APIs, including unauthorized access to your accounts with those third parties.`,
                `5.4 DeepSurf may modify, suspend or discontinue access to any data source, API integration or third party content at any time and without prior notice.`,
                `6. Subscriptions, fees and refunds`,
                `6.1 Access to certain features of the Platform is subject to subscription or other fees ("Paid Services"). By subscribing you agree to pay the applicable fees in the currency and on the billing schedule specified at the time of purchase.`,
                `6.2 Fees are generally charged in advance and are non refundable, except where required by applicable consumer protection laws or explicitly stated otherwise in writing. Trial periods, discounts and promotional offers, if any, are subject to specific terms communicated at the time of the offer.`,
                `6.3 DeepSurf may change its pricing and subscription plans at any time. Changes will apply to new subscriptions and to renewals after you have been notified of the updated pricing. If you do not agree with the new pricing, you must cancel your subscription before the renewal date.`,
                `6.4 You are responsible for any taxes, duties or similar governmental charges imposed on your payments, excluding taxes on DeepSurf’s net income`,
                `7. License and acceptable use`,
                `7.1 Subject to your compliance with the Agreement, DeepSurf grants you a limited, revocable, non exclusive, non transferable and non sublicensable license to access and use the Platform for your own personal or internal business purposes .`,
                `7.2 You must not:`,
                `a) resell, redistribute, lease, license, frame, mirror or otherwise commercially exploit the Platform or Analytics`,
                `b) use the Platform to provide services that compete with DeepSurf, including operating a similar analytics platform, data feed or signal service`,
                `c) copy, scrape, harvest or systematically download substantial portions of the Platform or underlying data`,
                `d) reverse engineer, decompile, disassemble or attempt to derive the source code, models or datasets, except to the extent permitted by mandatory law`,
                `e) manipulate or interfere with the integrity of data, signals or outputs, including by attempting to game or misuse any incentives, referral or reward programsf) use the Platform for any unlawful, fraudulent, abusive, harassing, defamatory, infringing or malicious purpose, including for market manipulation or other illegal trading activity.`,
                `7.3 DeepSurf may monitor usage patterns to detect abuse and to protect the security and stability of the Platform. We may suspend or terminate access if we reasonably believe that you have violated these Terms or are using the Platform in a manner that creates risk for DeepSurf, other users or third parties.`,
                `8. Risk disclosure`,
                `8.1 Trading in digital assets, derivatives, leveraged products and other financial instruments involves a high degree of risk. Prices can be extremely volatile and may move rapidly and unpredictably. You may lose some or all of the capital you invest`,
                `8.2 Market and instrument specific risks include, without limitation:`,
                `a) price volatility and liquidity risk`,
                `b) leverage and margin risk, including risk of liquidation and negative balance`,
                `c) technology and cybersecurity risk`,
                `d) smart contract and protocol risk`,
                `e) exchange, counterparty and settlement risk`,
                `f) regulatory and legal risk, including changes in law or enforcement actions`,
                `g) systemic risk, flash crashes and liquidity shocks.`,
                `8.3 Analytical tools, models and artificial intelligence systems are inherently limited. They rely on assumptions, historical data and incomplete information. Model errors, data quality issues, execution slippage and unforeseen events can lead to results that differ materially from any projections or probabilities generated by the Platform.`,
                `8.4 You acknowledge that you use the Platform at your own risk and that DeepSurf does not guarantee any profit, performance, outcome or avoidance of loss.`,
                `9. No warranties`,
                `9.1 The Platform and all content, data, Analytics and services are provided on an "as is" and "as available" basis, without any warranties or representations of any kind, whether express, implied or statutory.`,
                `9.2 Without limiting the foregoing, DeepSurf disclaims any implied warranties of merchantability, fitness for a particular purpose, non infringement, quiet enjoyment and any warranties arising from course of dealing or usage of trade.`,
                `9.3 DeepSurf does not warrant that:`,
                `a) the Platform will be uninterrupted, secure or free from errors or omissions`,
                `b) data or Analytics will be accurate, complete, up to date, reliable or suitable for any particular purpose`,
                `c) defects will be corrected or that the Platform is free of viruses, vulnerabilities or harmful components.`,
                `10. Limitation of liability`,
                `10.1 To the maximum extent permitted by applicable law, DeepSurf and its affiliates, directors, officers, employees, contractors, data providers and licensors will not be liable for any:`,
                `a) loss of profits, revenue, business, data, goodwill or opportunity`,
                `b) trading losses or loss of capital`,
                `c) indirect, consequential, incidental, special, exemplary or punitive damages`,
                `c) indirect, consequential, incidental, special, exemplary or punitive damagesarising out of or in connection with the Platform or these Terms, whether based on contract, tort, strict liability or any other theory, even if advised of the possibility of such damages.`,
                `10.2 To the maximum extent permitted by law, DeepSurf’s total aggregate liability arising out of or relating to the Platform or these Terms will not exceed the greater of:`,
                `a) the total fees paid by you to DeepSurf for access to the Platform during the six month period preceding the event giving rise to the claim, or`,
                `b) one hundred United States dollars (USD 100).`,
                `10.3 Some jurisdictions do not allow limitations of liability for certain types of damages, so some of the above limitations may not apply to you. In such cases, the limitations will apply to the maximum extent permitted by applicable law.`,
                `11. Indemnification`,
                `You agree to indemnify, defend and hold harmless DeepSurf and its affiliates, directors, officers, employees, contractors and agents from and against any and all claims, liabilities, damages, losses, costs and expenses, including reasonable legal fees, arising out of or related to`,
                `a) your access to or use of the Platform`,
                `b) your violation of these Terms or of any applicable law or regulation`,
                `c) your infringement or misappropriation of any intellectual property or other rights of any third party`,
                `d) any trading or investment decisions you make based, in whole or in part, on Analytics or other information obtained from the Platform.`,
                `12. Intellectual property`,
                `12.1 The Platform, including all software, models, algorithms, user interfaces, designs, text, graphics, logos, trademarks, service marks, databases, data structures, compilations and other content, is owned by DeepSurf or its licensors and is protected by intellectual property laws.`,
                `12.2 Except for the limited license expressly granted in section 7, no rights, title or interest in or to the Platform are transferred to you, whether by implication, estoppel or otherwise.`,
                `12.3 You may from time to time provide suggestions, feedback or ideas to DeepSurf. By doing so, you grant DeepSurf a perpetual, irrevocable, worldwide, royalty free license to use, modify and incorporate such feedback into the Platform without any obligation to you.`,
                `13. Suspension and termination`,
                `13.1 DeepSurf may suspend or terminate your access to the Platform, in whole or in part, at any time and at its discretion, including where:`,
                `a) you breach these Terms or other applicable policies`,
                `b) we consider it necessary for security, risk management, legal or regulatory reasons`,
                `c) we discontinue or materially modify the Platform.`,
                `13.2 You may stop using the Platform at any time. You may cancel subscriptions in accordance with the instructions provided in your account settings.`,
                `13.3 Upon termination, your right to access the Platform will immediately cease. Sections that by their nature should survive termination will continue to apply, including sections 3, 4, 5, 7 to 12, 15 and 16.`,
                `14. Sanctions, AML and prohibited use`,
                `14.1 You may not use the Platform if you are:`,
                `a) listed on any sanctions or restricted persons list administered by the European Union, United States, United Kingdom, United Nations or other relevant authority`,
                `b) acting on behalf of or for the benefit of any such person or entity`,
                `c) located in a jurisdiction subject to comprehensive sanctions or where DeepSurf is prohibited from providing services.`,
                `14.2 You may not use the Platform in connection with money laundering, terrorist financing, fraud, market manipulation or any other unlawful activity.`,
                `14.3 DeepSurf reserves the right to implement controls and procedures, including screening and monitoring, to comply with sanctions, anti money laundering and counter terrorist financing obligations.`,
                `15. Governing law and dispute resolution`,
                `15.1 Unless mandatory law provides otherwise, these Terms and any dispute arising out of or relating to them or to the Platform will be governed by and construed in accordance with the laws of the Republic of Serbia, excluding its conflict of law rules.`,
                `15.2 The parties agree to submit to the exclusive jurisdiction of the competent courts of the Republic of Serbia having jurisdiction over the registered seat of DeepSurf, without prejudice to any mandatory rights you may have as a consumer under the laws of your country of residence.`,
                `15.3 Before initiating formal proceedings, you agree to first contact DeepSurf and attempt to resolve the dispute informally in good faith.`,
                `16. Changes to the Terms`,
                `16.1 DeepSurf may modify these Terms from time to time. When we do so, we will update the "Last updated" date at the top of this document and, where appropriate, provide additional notice, for example by email or through the Platform.`,
                `16.2 Unless a different effective date is specified, updated Terms will take effect when published on the Platform. Your continued use of the Platform after the effective date will constitute your acceptance of the updated Terms. If you do not agree with the updated Terms, you must stop using the Platform.`,
                `17. Miscellaneous`,
                `17.1 If any provision of these Terms is held invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect.`,
                `17.2 DeepSurf’s failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.`,
                `17.3 You may not assign or transfer any of your rights or obligations under these Terms without DeepSurf’s prior written consent. DeepSurf may assign or transfer its rights and obligations under these Terms without restriction, including in connection with a merger, acquisition, corporate reorganization or sale of assets.`,
                `17.4 Nothing in these Terms creates any partnership, joint venture, agency or employment relationship between you and DeepSurf.`,
                `18. Contact`,
                `If you have any questions about these Terms or the Platform, you may contact us at:`,
                `ILIA BONDARCHUK PR IZDAVANJE SOFTVERA DEEPSURF NOVI SAD`,
                `Ćirila i Metodija 1`,
                `21000 Novi Sad`,
                `Republic of Serbia`,
                `Phone: +381 61 2416 591`,
                `Email for support and legal notices: support@deepsurf.io`


            ],
        },
        {
            id: 3,
            title: "High-Risk Crypto Derivatives Warning",
            content: [
                `Last updated: 10 December 2025`,
                `This High-Risk Crypto Derivatives Warning (“Warning”) is issued by ILIA BONDARCHUK PR IZDAVANJE SOFTVERA DEEPSURF NOVI SAD, a sole proprietorship organized under the laws of the Republic of Serbia (“DeepSurf”, “we”, “us” or “our”), and applies to your use of the DeepSurf platform, websites, applications, tools and related services (the “Platform”).This Warning supplements and forms an integral part of the Terms of Use and Risk Disclosure Statement. It is intended to clearly inform users of the substantial and, in many cases, extreme risks associated with crypto-asset derivatives and leveraged financial instruments.`,
                `1. Nature of crypto derivatives`,
                `Crypto-asset derivatives, including but not limited to perpetual contracts, futures, options, margin products and other leveraged instruments, are complex financial products that are not suitable for many investors.These instruments derive their value from underlying crypto-assets, market indices or reference prices and often involve leverage, which amplifies exposure to price movements.`,
                `2. High volatility and leverage risk`,
                `Crypto-asset markets are subject to extreme volatility. Prices may move sharply within seconds or minutes, including outside of normal market conditions, during low-liquidity periods or as a result of sudden market events.The use of leverage significantly increases the risk of rapid losses. Even a small adverse price movement may result in the immediate liquidation of a position, loss of margin, or losses exceeding your initial investment.`,
                `3. Liquidation and margin risks`,
                `When trading leveraged derivatives, positions may be automatically liquidated by a third party platform if margin requirements are no longer met. Liquidations can occur without prior notice and at unfavorable prices, particularly during periods of high volatility or low liquidity.`,
                `Liquidation mechanisms, margin requirements, funding rates and risk parameters are determined by third party trading venues, not by DeepSurf. DeepSurf has no control over, and bears no responsibility for, such mechanisms.`,
                `4. Complexity and lack of investor protections`,
                `Crypto-asset derivatives may not benefit from the same regulatory protections as traditional financial products. Depending on jurisdiction, you may not have access to investor compensation schemes, dispute resolution mechanisms or regulatory oversight comparable to regulated securities or exchange-traded derivatives markets.The operation of derivatives markets may be opaque, fragmented or subject to sudden changes in rules, parameters or availability`,
                `5. Technology and operational risks`,
                `Trading in crypto derivatives relies on complex technological infrastructure, including matching engines, risk systems, APIs and smart contracts. These systems may experience outages, delays, malfunctions or failures.`,
                `Errors in order execution, price feeds, margin calculations or system availability can lead to unexpected losses or inability to manage positions effectively.`,
                `6. No execution or trading services by DeepSurf`,
                `DeepSurf does not execute trades, clear transactions, provide brokerage services, custody assets or operate trading venues. Any trading activity undertaken by users is conducted entirely on third party platforms, at the user’s sole discretion and risk.`,
                `Analytics, models and indicators provided by DeepSurf do not eliminate, reduce or control the risks inherent in crypto derivatives trading.`,
                `7. Appropriateness assessment`,
                `You should carefully assess whether trading crypto-asset derivatives is appropriate for you in light of your financial situation, investment objectives, knowledge, experience and risk tolerance.`,
                `8. Acknowledgement`,
                `By accessing or using the Platform in connection with crypto-asset derivatives, you acknowledge that:`,
                `-	you understand that crypto derivatives involve a high risk of loss`,
                `-	you may lose some or all of your invested capital`,
                `-	DeepSurf does not provide investment advice or risk management services`,
                `-	you assume full responsibility for all trading decisions and outcomes.`,
                `If you do not accept these risks, you must not use the Platform in connection with crypto-asset derivatives.`

            ],
        },
        {
            id: 4,
            title: "US CFTC / SEC Regulatory Risk Notice",
            content: [
                `Last updated: 10 December 2025`,
                `This US CFTC / SEC Regulatory Risk Notice (“Notice”) is provided by ILIA BONDARCHUK PR IZDAVANJE SOFTVERA DEEPSURF NOVI SAD (“DeepSurf”, “we”, “us” or “our”) for the purpose of informing users of potential regulatory considerations applicable to persons subject to United States law.This Notice does not constitute legal advice and does not alter your responsibility to comply with applicable laws and regulations.`,
                `1. No registration with US regulators`,
                `DeepSurf is not registered with, licensed by, or supervised by:`,
                `-	the United States Securities and Exchange Commission (SEC)`,
                `-	the United States Commodity Futures Trading Commission (CFTC)`,
                `-	the National Futures Association (NFA)`,
                `-	any US federal or state financial regulatory authority.`,
                `DeepSurf does not act as a broker-dealer, futures commission merchant, introducing broker, commodity trading adviser, commodity pool operator, investment adviser or national securities exchange under US law.`,
                `2. No offer or solicitation to US persons`,
                `The Platform is not intended to constitute, and must not be interpreted as, an offer to sell or a solicitation of an offer to buy securities, futures, options, swaps or other regulated financial instruments to any person in the United States or any other jurisdiction where such offer or solicitation would be unlawful.Nothing on the Platform is intended to encourage or enable any US person to engage in trading activities that would require registration, licensing or regulatory approval under US federal or state law.`,
                `3. Regulatory uncertainty of digital assets`,
                `The regulatory status of digital assets, crypto-asset derivatives and related products under US law is evolving and remains uncertain. Certain digital assets or market activities may be classified by US regulators as securities, commodities or other regulated instruments, now or in the future.Changes in regulatory interpretation, legislation, rulemaking or enforcement actions may materially affect the availability, legality or treatment of digital assets and related activities.`,
                `4. Use by US persons may be restricted`,
                `DeepSurf reserves the right, at its sole discretion, to restrict, limit or deny access to the Platform to US persons or users located in the United States in order to address regulatory, legal or risk considerations.`,
                `Users are responsible for determining whether their access to or use of the Platform complies with US laws and regulations applicable to them.`,
                `5. No regulatory protections under US law`,
                `Users of the Platform do not benefit from protections afforded to customers of US-registered broker-dealers, futures commission merchants or investment advisers, including protections relating to segregation of customer funds, capital requirements, disclosures, suitability obligations or regulatory oversight.`,
                `6. User responsibility and compliance`,
                `You are solely responsible for ensuring that your use of the Platform complies with all applicable US federal and state laws, regulations and rules, including securities laws, commodities laws, tax obligations, sanctions and reporting requirements.`,
                `You should consult qualified legal and tax advisers regarding your obligations under US law before accessing or using the Platform.`,
                `7. No assurances or representations`,
                `DeepSurf makes no representation or warranty that:`,
                `-	any asset, strategy or activity discussed on the Platform is lawful for US persons`,
                `-	regulatory treatment will remain unchanged`,
                `-	access to the Platform will be continuous or unrestricted for US users.`,
                `8. Acknowledgement`,
                `By accessing or using the Platform, you acknowledge that:`,
                `-	DeepSurf is not regulated by the SEC or CFTC`,
                `-	the Platform may not be suitable for US persons`,
                `-	you assume full responsibility for compliance with applicable US laws`,
                `-	DeepSurf bears no liability for regulatory consequences arising from your use of the Platform`
            ],
        }

    ];

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Highlight top-level numbered headings (e.g., "1. Title", "2. Title")
    const headingRegex = useMemo(() => /^\d+\.\s/i, []);

    const SidebarContent = (
        <List>
            {sections.map((section, index) => (
                <ListItem key={section.id} disablePadding>
                    <ListItemButton
                        selected={activeSectionId === section.id}
                        onClick={() => {
                            setActiveSectionId(section.id);
                            setDrawerOpen(false);
                        }}
                        sx={{
                            borderRadius: "8px",
                            mb: 0.5,
                            color: "#fff",
                            "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 0.1)",
                            },
                            "&.Mui-selected": {
                                bgcolor: "rgba(255, 255, 255, 0.15)",
                                color: "#fff",
                                fontWeight: "bold",
                                borderLeft: "3px solid #fff",
                                "&:hover": {
                                    bgcolor: "rgba(255, 255, 255, 0.2)",
                                },
                            },
                        }}
                    >
                        {index + 1}. {section.title}
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
    return (
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: "#000", minHeight: "100vh" }}>
                {/* Header */}
                <AppBar position="fixed" sx={{ bgcolor: "#000", padding: "5px", borderBottom: "1px solid #333" }}>
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: { xs: 1, lg: 0 },
                                textAlign: { xs: "center", lg: "left" },
                            }}
                        >
                            <img src={DeepSurfLogo} width={110} height={50} />
                        </Typography>

                        {/* <Box
                            sx={{
                                display: { xs: "none", lg: "flex" },
                                justifyContent: "center",
                                gap: 4,
                                flexGrow: 1,
                            }}
                        >
                            <Typography variant="button" sx={{ color: "#fff" }}>Home</Typography>
                            <Typography variant="button" sx={{ color: "#fff" }}>About</Typography>
                            <Typography variant="button" sx={{ color: "#fff" }}>Services</Typography>
                            <Typography variant="button" sx={{ color: "#fff" }}>Contact</Typography>
                        </Box> */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: "block", lg: "none" }, position: "absolute", right: 16, color: "#fff" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Box
                    sx={{
                        mt: { xs: "80px", lg: "80px" },
                        width: "100%",
                        textAlign: "center",
                        py: 4,
                        bgcolor: "#000",
                    }}

                >
                    <img src={DeepSurfLogo} width={220} height={100} alt="DeepSurf Logo" />
                    <Typography variant="h6" sx={{ mt: 2, color: "#fff" }}>
                        DeepSurf - Innovative Solutions for Modern Web
                    </Typography>
                </Box>
                <Box display="flex" minHeight="100px" bgcolor="#000">
                    <Box
                        sx={{
                            display: { xs: "none", lg: "block" },
                            width: 350,
                            bgcolor: "rgba(28, 28, 28, 1)",
                            borderRadius: "10px",
                            p: 3,
                            borderRight: "1px solid #444",
                            maxHeight: "60vh",
                            overflowY: "auto",
                        }}
                    >
                        {SidebarContent}
                    </Box>

                    <Drawer
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        anchor="left"
                        sx={{
                            "& .MuiDrawer-paper": { width: 250, bgcolor: "neutral.darkGrey", color: "neutral.Snowwhite", p: 3 },
                        }}
                    >
                        {SidebarContent}
                    </Drawer>

                    <Box
                        flex={1}
                        sx={{
                            p: { xs: 3, md: 5, lg: 6 },
                            bgcolor: "#1a1a1a",
                            mx: { xs: 2, md: 4 },
                            my: { xs: 2, md: 3 },
                            borderRadius: "12px",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 2,
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >
                            {sections.find((section) => section.id === activeSectionId)?.title}
                        </Typography>
                        {sections
                            .find((section) => section.id === activeSectionId)
                            ?.content.map((paragraph, idx) => {
                                const isHeading = headingRegex.test(paragraph);
                                return (
                                    <Typography
                                        key={idx}
                                        sx={{
                                            mb: 1,
                                            color: isHeading ? "rgba(255, 100, 33, 1)" : "neutral.Snowwhite",
                                            lineHeight: 1.8,
                                            fontSize: isHeading ? "1.05rem" : "1rem",
                                            fontWeight: isHeading ? 800 : 600,
                                        }}
                                    >
                                        {paragraph}
                                    </Typography>
                                );
                            })}
                    </Box>
                </Box>
            </Box>
        </Container>

    );
};

export default TermAndCondition;

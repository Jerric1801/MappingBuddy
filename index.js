const mods = {"IS": [{"label": "IS.215 Digital Business - Technologies and Transformation", "value": "IS.215"}, {"label": "IS.404 Technology Entrepreneurship Study Mission (Asia)", "value": "IS.404"}, {"label": "IS.425 Digital Transformation Strategy", "value": "IS.425"}, {"label": "IS.428 Visual Analytics for Business Intelligence", "value": "IS.428"}, {"label": "IS.444 Digital Banking Enterprise Architecture", "value": "IS.444"}, {"label": "IS.446 Managing Customer Relations with Analytics: Asian Insights", "value": "IS.446"}, {"label": "IS105 Business Data Management", "value": "IS105"}, {"label": "IS110 Information Systems and Innovation", "value": "IS110"}, {"label": "IS111 Introduction to Programming", "value": "IS111"}, {"label": "IS113 Web Application Development I", "value": "IS113"}, {"label": "IS210 Business Process Analysis & Solutioning", "value": "IS210"}, {"label": "IS211 Interaction Design and Prototypicorng", "value": "IS211"}, {"label": "IS212 Software Project Management", "value": "IS212"}, {"label": "IS216 Web Application Development II", "value": "IS216"}, {"label": "IS217 Analytics Foundation", "value": "IS217"}, {"label": "IS412 Enterprise Business Solutions", "value": "IS412"}, {"label": "IS419 Retail Banking and Mobile Technology", "value": "IS419"}, {"label": "IS423 Financial Markets Processes and Technology", "value": "IS423"}, {"label": "IS424 Data Mining and Business Analytics", "value": "IS424"}, {"label": "IS430 Digital Payments and Innovation", "value": "IS430"}, {"label": "IS434 Social Analytics and Applications", "value": "IS434"}, {"label": "IS442 Object Oriented Programming", "value": "IS442"}, {"label": "IS452 Blockchain Applications in Financial Services", "value": "IS452"}, {"label": "IS453 Financial Analytics", "value": "IS453"}, {"label": "IS455 Overseas Project Experience (Data Analytics in Asia)", "value": "IS455"}, {"label": "IS457 Fairness in Socio-technical Systems", "value": "IS457"}, {"label": "IS458 Cloud Management and Engineering", "value": "IS458"}, {"label": "IS459 Big Data Architecture", "value": "IS459"}, {"label": "IS460 Machine Learning & Applications", "value": "IS460"}, {"label": "IS461 AI Governance", "value": "IS461"}, {"label": "IS470 Guided Research in Computing", "value": "IS470"}, {"label": "IS471 Guided Research in Computing 2", "value": "IS471"}, {"label": "IS472 Guided Advanced Research in Computing", "value": "IS472"}, {"label": "IS483 IS/SMT Project Experience (Applications)", "value": "IS483"}, {"label": "IS484 IS Project Experience [FinTech]", "value": "IS484"}, {"label": "IS490 Google Analytics Work-Study Elective", "value": "IS490"}, {"label": "IS602 Spreadsheets Modeling for Decision Making", "value": "IS602"}, {"label": "IS604 Global Sourcing of Technology and Processes", "value": "IS604"}, {"label": "IS607 Capstone Project - Data Science and Engineering", "value": "IS607"}, {"label": "IS610 Capstone Project - Cybersecurity", "value": "IS610"}, {"label": "IS612 Project", "value": "IS612"}, {"label": "IS613 Cybersecurity Technology and Applications", "value": "IS613"}, {"label": "IS614 IoT: Technology and Applications", "value": "IS614"}, {"label": "IS615 Digital Transformation Strategy", "value": "IS615"}, {"label": "IS616 Internship", "value": "IS616"}, {"label": "IS617 Capstone Project - Software and Cyber-Physical Systems", "value": "IS617"}, {"label": "IS620 Digital Organization and Change Management", "value": "IS620"}, {"label": "IS711 Learning and Planning in Intelligent Systems", "value": "IS711"}, {"label": "IS712 Machine Learning", "value": "IS712"}, {"label": "IS713 Foundations for Data Analytics", "value": "IS713"}, {"label": "IS718 Empirical Research Project I", "value": "IS718"}, {"label": "IS720 Empirical Research Project III", "value": "IS720"}, {"label": "IS721 Research Seminars I", "value": "IS721"}, {"label": "IS722 Research Seminars II", "value": "IS722"}, {"label": "IS771 Empirical Research Project 1", "value": "IS771"}, {"label": "IS772 Empirical Research Project 2", "value": "IS772"}, {"label": "IS773 Empirical Research Project 3", "value": "IS773"}, {"label": "IS774 Empirical Research Project 4", "value": "IS774"}, {"label": "IS783 Seminars in Information Systems 1", "value": "IS783"}, {"label": "IS784 Seminars in Information Systems 2", "value": "IS784"}, {"label": "IS786 Research Topics in Information Systems 1", "value": "IS786"}, {"label": "IS787 Research Topics in Information System 2", "value": "IS787"}], "ACCT": [{"label": "ACCT.414 Accounting Analytics Capstone", "value": "ACCT.414"}, {"label": "ACCT009 Overseas Project Experience (Accounting in Asia)", "value": "ACCT009"}, {"label": "ACCT101 Financial Accounting", "value": "ACCT101"}, {"label": "ACCT102 Management Accounting", "value": "ACCT102"}, {"label": "ACCT105 Financial Accounting for Law", "value": "ACCT105"}, {"label": "ACCT111 Financial Accounting", "value": "ACCT111"}, {"label": "ACCT201 Corporate Reporting and Financial Analysis", "value": "ACCT201"}, {"label": "ACCT221 Accounting Information Systems", "value": "ACCT221"}, {"label": "ACCT223 Taxation", "value": "ACCT223"}, {"label": "ACCT224 Financial Reporting and Analysis", "value": "ACCT224"}, {"label": "ACCT331 Audit and Assurance", "value": "ACCT331"}, {"label": "ACCT332 Accounting Thought and Governance", "value": "ACCT332"}, {"label": "ACCT334 Intermediate Financial Accounting", "value": "ACCT334"}, {"label": "ACCT335 Advanced Financial Accounting", "value": "ACCT335"}, {"label": "ACCT336 Valuation", "value": "ACCT336"}, {"label": "ACCT337 Statistical Programming", "value": "ACCT337"}, {"label": "ACCT403 Advanced Taxation", "value": "ACCT403"}, {"label": "ACCT407 Corporate Financial Management", "value": "ACCT407"}, {"label": "ACCT410 Internal Audit", "value": "ACCT410"}, {"label": "ACCT418 Data Modelling and Visualisation", "value": "ACCT418"}, {"label": "ACCT420 Forecasting and Forensic Analytics", "value": "ACCT420"}, {"label": "ACCT424 Auditing Information Systems", "value": "ACCT424"}, {"label": "ACCT425 Forensic Accounting and Investigation", "value": "ACCT425"}, {"label": "ACCT427 Accounting Data and Analytics Work-Study Elective", "value": "ACCT427"}, {"label": "ACCT431 Sustainability Accounting and Reporting", "value": "ACCT431"}, {"label": "ACCT604 Financial Statement Analysis", "value": "ACCT604"}, {"label": "ACCT611 Financial Accounting", "value": "ACCT611"}, {"label": "ACCT616 Management Accounting", "value": "ACCT616"}, {"label": "ACCT634 Risk Governance", "value": "ACCT634"}, {"label": "ACCT635 Ethics and Social Responsibility", "value": "ACCT635"}, {"label": "ACCT642 Financial Statement Analysis", "value": "ACCT642"}, {"label": "ACCT644 Advanced Financial Statement Analysis", "value": "ACCT644"}, {"label": "ACCT647 Accounting", "value": "ACCT647"}, {"label": "ACCT648 Applied Statistics for Data Analysis", "value": "ACCT648"}, {"label": "ACCT649 Programming with Data", "value": "ACCT649"}, {"label": "ACCT651 Managing for Value Creation", "value": "ACCT651"}, {"label": "ACCT657 Financial Reporting in the IFRS World (Part I)", "value": "ACCT657"}, {"label": "ACCT665 Data Modelling and Visualisation", "value": "ACCT665"}, {"label": "ACCT666 Financial Reporting in the IFRS World (Part I)", "value": "ACCT666"}, {"label": "ACCT679 Visual Analytics for Accounting", "value": "ACCT679"}, {"label": "ACCT682 Programming for Business Analytics", "value": "ACCT682"}, {"label": "ACCT701 Accounting and Governance \u2013 Theory and Practice", "value": "ACCT701"}, {"label": "ACCT702 Introduction to Accounting Research", "value": "ACCT702"}, {"label": "ACCT704 Financial Accounting", "value": "ACCT704"}, {"label": "ACCT707 Empirical Research Project I", "value": "ACCT707"}, {"label": "ACCT711 Information and Capital Markets", "value": "ACCT711"}, {"label": "ACCT712 Global Leadership and Organizational Behavior", "value": "ACCT712"}, {"label": "ACCT714 Global Financial Markets and Institutions", "value": "ACCT714"}, {"label": "ACCT715 Introductory Research Project", "value": "ACCT715"}, {"label": "ACCT723 Academic Writing Workshop", "value": "ACCT723"}], "COR": [{"label": "COR1001 Internship", "value": "COR1001"}, {"label": "COR1100 Writing and Reasoning", "value": "COR1100"}, {"label": "COR1201 Calculus", "value": "COR1201"}, {"label": "COR1301 Leadership and Team Building", "value": "COR1301"}, {"label": "COR1305 Spreadsheet Modeling and Analytics", "value": "COR1305"}, {"label": "COR1306 Capital Markets in China", "value": "COR1306"}, {"label": "COR1307 Accounting for Entrepreneurs", "value": "COR1307"}, {"label": "COR1701 Critical Thinking in the Real World", "value": "COR1701"}, {"label": "COR1703 Managing in a Volatile, Uncertain, Complex and Ambiguous Context", "value": "COR1703"}, {"label": "COR2001 Community Service", "value": "COR2001"}, {"label": "COR2100 Economics and Society", "value": "COR2100"}, {"label": "COR2201 Technology and World Change", "value": "COR2201"}, {"label": "COR2203 Climate Change: Global and Local Solutions", "value": "COR2203"}, {"label": "COR2204 Science and Technology Studies: Where Science meets Society", "value": "COR2204"}, {"label": "COR2205 Climate, History and Society", "value": "COR2205"}, {"label": "COR2210 Technological Innovations Enhancing Urban Sustainability", "value": "COR2210"}, {"label": "COR2213 Biotechnology in a Global Society", "value": "COR2213"}, {"label": "COR2217 Situating the Machine: Technology, Politics, and Societies", "value": "COR2217"}, {"label": "COR2221 AI and Humanity", "value": "COR2221"}, {"label": "COR2222 AI for Social Transformation", "value": "COR2222"}, {"label": "COR2224 AI: Past, Present, and Future", "value": "COR2224"}, {"label": "COR2406 French", "value": "COR2406"}, {"label": "COR2407 Italian", "value": "COR2407"}, {"label": "COR2408 Spanish", "value": "COR2408"}, {"label": "COR2603 Singapore: Imagining The Next Fifty Years", "value": "COR2603"}, {"label": "COR2614 Publics and Privates on The Pacific Rims", "value": "COR2614"}, {"label": "COR2619 Fashioning a Nation", "value": "COR2619"}, {"label": "COR2620 Redefining the Third Age in Singapore", "value": "COR2620"}, {"label": "COR2626 Imagining the Self: Literature, Ethnicity and Gender in Asia", "value": "COR2626"}, {"label": "COR2627 European Cultural History: From Antiquity to Brexit", "value": "COR2627"}, {"label": "COR2631 Scratches on their Minds: Images of Asia in Hollywood", "value": "COR2631"}, {"label": "COR3001 Big Questions", "value": "COR3001"}, {"label": "COR3301 Ethics and Social Responsibility", "value": "COR3301"}, {"label": "COR3302 Ethics and Social Responsibility for Accounting", "value": "COR3302"}, {"label": "COR3304 Ethics and Corporate Responsibility", "value": "COR3304"}], "CS": [{"label": "\t\t\tCS.420 Introduction to Artificial Intelligence", "value": "CS.420"}, {"label": "CS101 Programming Fundamentals I", "value": "CS101"}, {"label": "CS103 Linear Algebra for Computing Applications", "value": "CS103"}, {"label": "CS104 Mathematical Foundations of Computing", "value": "CS104"}, {"label": "CS201 Data Structures and Algorithms", "value": "CS201"}, {"label": "CS203 Collaborative Software Development", "value": "CS203"}, {"label": "CS204 Interconnection of Cyber Physical Systems", "value": "CS204"}, {"label": "CS301 IT Solution Architecture", "value": "CS301"}, {"label": "CS302 IT Solution Lifecycle Management", "value": "CS302"}, {"label": "CS421 Principles of Machine Learning", "value": "CS421"}, {"label": "CS422 Reasoning, Planning and Learning under Uncertainty", "value": "CS422"}, {"label": "CS425 Natural Language Communication", "value": "CS425"}, {"label": "CS440 Foundations of Cybersecurity", "value": "CS440"}, {"label": "CS443 Software and Systems Security", "value": "CS443"}, {"label": "CS444 Strategic Cybersecurity Management", "value": "CS444"}, {"label": "CS460 Foundations of Cyber-Physical Systems", "value": "CS460"}, {"label": "CS462 Internet of Things: Technology and Applications", "value": "CS462"}, {"label": "CS470 Guided Research in Computer Science", "value": "CS470"}, {"label": "CS480 Computer Science Project Experience", "value": "CS480"}, {"label": "CS490 Computer Science Work Study Elective", "value": "CS490"}, {"label": "CS602 Algorithm Design and Implementation", "value": "CS602"}, {"label": "CS603 Multi-Agent Systems", "value": "CS603"}, {"label": "CS604 Deep Learning for Visual Recognition", "value": "CS604"}, {"label": "CS612 AI System Evaluation", "value": "CS612"}, {"label": "CS701 Deep Learning and Vision", "value": "CS701"}], "SMT": [{"label": "SMT.201 Geographic Information Systems for Urban Planning", "value": "SMT.201"}, {"label": "SMT113 Sensors and IoT Programming", "value": "SMT113"}, {"label": "SMT202 Analytics Applications for Smart Living", "value": "SMT202"}, {"label": "SMT203 Computational Social Science: Principles and Applications", "value": "SMT203"}, {"label": "SMT481 Smart-City Operations Research", "value": "SMT481"}], "DSA": [{"label": "DSA\t\tDSA211 Statistical Learning with R", "value": "DSA211"}, {"label": "DSA212 Data Science with R", "value": "DSA212"}, {"label": "DSA306 Big Data Analytics", "value": "DSA306"}], "ECON": [{"label": "ECON104 Mathematics for Economics", "value": "ECON104"}, {"label": "ECON107 Introduction to Econometrics", "value": "ECON107"}, {"label": "ECON111 Microeconomics 1", "value": "ECON111"}, {"label": "ECON112 Macroeconomics 1", "value": "ECON112"}, {"label": "ECON113 Economics of Globalisation", "value": "ECON113"}, {"label": "ECON118 Economic Development in Asia", "value": "ECON118"}, {"label": "ECON145 Introductory Data Analytics in Healthcare", "value": "ECON145"}, {"label": "ECON155 Healthcare Management", "value": "ECON155"}, {"label": "ECON203 International Economics", "value": "ECON203"}, {"label": "ECON204 Development Economics", "value": "ECON204"}, {"label": "ECON206 Game Theory", "value": "ECON206"}, {"label": "ECON207 Intermediate Econometrics", "value": "ECON207"}, {"label": "ECON209 Labour Economics", "value": "ECON209"}, {"label": "ECON212 Real Estate Economics", "value": "ECON212"}, {"label": "ECON215 Health Economics", "value": "ECON215"}, {"label": "ECON216 Economics of Ageing", "value": "ECON216"}, {"label": "ECON217 Macroeconomics of Income Distribution", "value": "ECON217"}, {"label": "ECON226 Urban Economics and Policy", "value": "ECON226"}, {"label": "ECON234 International Trade", "value": "ECON234"}, {"label": "ECON241 Strategic Thinking", "value": "ECON241"}, {"label": "ECON243 Demographic and Family Economics", "value": "ECON243"}, {"label": "ECON245 Applied Healthcare Analytics", "value": "ECON245"}, {"label": "ECON248 Overseas Project Experience (Macroeconomics in Asia)", "value": "ECON248"}, {"label": "ECON251 Microeconomics 2", "value": "ECON251"}, {"label": "ECON252 Macroeconomics 2", "value": "ECON252"}, {"label": "ECON301 Advanced Microeconomics", "value": "ECON301"}, {"label": "ECON400 Senior Thesis", "value": "ECON400"}, {"label": "ECON490 Health Economics and Management Work-study Elective", "value": "ECON490"}, {"label": "ECON601 Microeconomics", "value": "ECON601"}, {"label": "ECON603 Macroeconomics and Global Financial Markets", "value": "ECON603"}, {"label": "ECON611 Econometrics", "value": "ECON611"}, {"label": "ECON612 Understanding the Global Economy and Financial Markets", "value": "ECON612"}, {"label": "ECON621 Microeconomics II", "value": "ECON621"}, {"label": "ECON657 Political Economy: Global & Regional", "value": "ECON657"}, {"label": "ECON672 Global Economics", "value": "ECON672"}, {"label": "ECON680 Macroeconomic Analysis", "value": "ECON680"}, {"label": "ECON681 Microeconomic Analysis", "value": "ECON681"}, {"label": "ECON682 Econometric Analysis", "value": "ECON682"}, {"label": "ECON696 Math. Methods for Economic Dynamics", "value": "ECON696"}, {"label": "ECON724 International Trade", "value": "ECON724"}, {"label": "ECON735 Advances in the Singapore and ASEAN Economies", "value": "ECON735"}, {"label": "ECON747 Spatial Econometric Models and Methods", "value": "ECON747"}, {"label": "ECON6003 International Trade: Theory and Policy", "value": "ECON6003"}, {"label": "ECON6027 Spatial Econometrics and Data Analysis", "value": "ECON6027"}, {"label": "ECON6028 Internship", "value": "ECON6028"}, {"label": "ECON6029 Internship", "value": "ECON6029"}], "FNCE": [{"label": "FNCE.213 Entrepreneurial Finance", "value": "FNCE.213"}, {"label": "FNCE.315 Analytics in Finance And Real Estate", "value": "FNCE.315"}, {"label": "FNCE101 Finance", "value": "FNCE101"}, {"label": "FNCE102 Financial Markets and Investments", "value": "FNCE102"}, {"label": "FNCE103 Finance For Law", "value": "FNCE103"}, {"label": "FNCE201 Corporate Finance", "value": "FNCE201"}, {"label": "FNCE217 Wealth Management and Advisory", "value": "FNCE217"}, {"label": "FNCE221 Investment Banking", "value": "FNCE221"}, {"label": "FNCE231 Real Estate Investments and Finance", "value": "FNCE231"}, {"label": "FNCE232 Project Financing", "value": "FNCE232"}, {"label": "FNCE305 Analysis of Derivative Securities", "value": "FNCE305"}, {"label": "FNCE307 Advanced Portfolio Management", "value": "FNCE307"}, {"label": "FNCE310 Trade Finance", "value": "FNCE310"}, {"label": "FNCE699 Financial Markets", "value": "FNCE699"}, {"label": "FNCE705 Investments", "value": "FNCE705"}, {"label": "FNCE706 Fundamental Research in Corporate Finance", "value": "FNCE706"}, {"label": "FNCE710 Corporate Finance II", "value": "FNCE710"}, {"label": "FNCE6001 Corporate Finance", "value": "FNCE6001"}, {"label": "FNCE6003 Hedge Funds", "value": "FNCE6003"}, {"label": "FNCE6006 Equity Analysis and Portfolio Management", "value": "FNCE6006"}, {"label": "FNCE6010 Fixed Income Analysis", "value": "FNCE6010"}, {"label": "FNCE6034 Advanced Corporate Finance", "value": "FNCE6034"}, {"label": "FNCE6035 Equity Analysis and Portfolio Management", "value": "FNCE6035"}, {"label": "FNCE6037 Investment Banking", "value": "FNCE6037"}, {"label": "FNCE6043 Fixed Income and Derivatives Analysis", "value": "FNCE6043"}, {"label": "FNCE6045 Sustainable Finance", "value": "FNCE6045"}, {"label": "FNCE6047 Financial Analytics and Innovation", "value": "FNCE6047"}, {"label": "FNCE6048 Advanced Equity Analysis and Portfolio Management", "value": "FNCE6048"}, {"label": "FNCE6052 Quantitative Methods and Economic Analysis", "value": "FNCE6052"}, {"label": "FNCE6056 Corporate Finance", "value": "FNCE6056"}, {"label": "FNCE6058 Capstone Project", "value": "FNCE6058"}], "LAW": [{"label": "LAW\tLAW.481 International Mediation Law and Practice", "value": "LAW.481"}, {"label": "LAW.486 Privacy and Data Protection Law", "value": "LAW.486"}, {"label": "LAW.491 Law and Digital Commerce", "value": "LAW.491"}, {"label": "LAW101_601 Contract Law 1", "value": "LAW101_601"}, {"label": "LAW103_603 Criminal Law", "value": "LAW103_603"}, {"label": "LAW105_605 Law of Torts", "value": "LAW105_605"}, {"label": "LAW106_606 Legal Research and Writing I", "value": "LAW106_606"}, {"label": "LAW108_608 The Singapore Legal System", "value": "LAW108_608"}, {"label": "LAW201_621 Corporate Law", "value": "LAW201_621"}, {"label": "LAW202_622 Law of Property", "value": "LAW202_622"}, {"label": "LAW203_623 Comparative Legal Systems", "value": "LAW203_623"}, {"label": "LAW301_631 Legal Theory & Philosophy", "value": "LAW301_631"}, {"label": "LAW302_632 Commercial Conflict of Laws", "value": "LAW302_632"}, {"label": "LAW307_637 Law of Evidence", "value": "LAW307_637"}, {"label": "LAW400 Directed Research", "value": "LAW400"}, {"label": "LAW401 Intellectual Property Law", "value": "LAW401"}, {"label": "LAW405 Information Technology and the Law", "value": "LAW405"}, {"label": "LAW406 International Commercial Arbitration", "value": "LAW406"}, {"label": "LAW414 International Commercialisation of Intellectual Property Rights", "value": "LAW414"}, {"label": "LAW416 International Moots 1", "value": "LAW416"}, {"label": "LAW433 Financial & Securities Regulation", "value": "LAW433"}, {"label": "LAW445 Principles of the Law of Restitution", "value": "LAW445"}, {"label": "LAW449 Legal and Commercial Principles in Project Financing Transactions", "value": "LAW449"}, {"label": "LAW451 Pre-trial Practice in Civil Litigation", "value": "LAW451"}, {"label": "LAW462 Introduction to Civil Procedure", "value": "LAW462"}, {"label": "LAW478 Professional Mediation Skills", "value": "LAW478"}, {"label": "LAW498 State Courts Clerkship Programme", "value": "LAW498"}, {"label": "LAW630 Directed Research", "value": "LAW630"}, {"label": "LAW641 Asian and Global Trends in Information Technology Law", "value": "LAW641"}, {"label": "LAW643 Cross-Border Mediation: Professional Skills and Practice", "value": "LAW643"}, {"label": "LAW646 Judgecraft", "value": "LAW646"}, {"label": "LAW649 Blockchain and Governance", "value": "LAW649"}, {"label": "LAW650 Internship", "value": "LAW650"}, {"label": "LAW654 Trade Regulation in a Global Age", "value": "LAW654"}, {"label": "LAW655 Fintech Regulation", "value": "LAW655"}, {"label": "LAW700 Law in a Commercial Context", "value": "LAW700"}, {"label": "LAW4012 Entrepreneurship in Singapore - From Cradle To Grave", "value": "LAW4012"}, {"label": "LAW4029 Sentencing Advocacy", "value": "LAW4029"}, {"label": "LAW4030 Carriage of Goods by Sea and International Trade", "value": "LAW4030"}, {"label": "LAW4032 Law and Technology", "value": "LAW4032"}, {"label": "LAW4039 Community Based Projects in the Real World", "value": "LAW4039"}, {"label": "LAW4040 International investment Law and Dispute Resolution", "value": "LAW4040"}, {"label": "LAW4041 International Anti-Corruption Compliance Law and Practice", "value": "LAW4041"}, {"label": "LAW4042 Sustainability Law", "value": "LAW4042"}], "MGMT": [{"label": "MGMT\t\t\tMGMT.104 Corporate Entrepreneurship and Innovation", "value": "MGMT.104"}, {"label": "MGMT.205 International Business", "value": "MGMT.205"}, {"label": "MGMT.218 Entrepreneurship and Business Creation", "value": "MGMT.218"}, {"label": "MGMT.222 Family Business", "value": "MGMT.222"}, {"label": "MGMT.223 Sustainable Entrepreneurship", "value": "MGMT.223"}, {"label": "MGMT.235 Sustainability Management and Governance", "value": "MGMT.235"}, {"label": "MGMT.236 Managing Strategic Change and Digital Transformation", "value": "MGMT.236"}, {"label": "MGMT.244 Fraud Protection for Entrepreneurs", "value": "MGMT.244"}, {"label": "MGMT.318 Design Thinking and Innovation", "value": "MGMT.318"}, {"label": "MGMT.319 Management of Technology and Innovation", "value": "MGMT.319"}, {"label": "MGMT.330 The Design of Business", "value": "MGMT.330"}, {"label": "MGMT102 Strategy", "value": "MGMT102"}, {"label": "MGMT106 Introduction to Organisations", "value": "MGMT106"}, {"label": "MGMT108 Introduction to Business Analytics", "value": "MGMT108"}, {"label": "MGMT232 Business Consulting", "value": "MGMT232"}, {"label": "MGMT237 Corporate Strategy", "value": "MGMT237"}, {"label": "MGMT301 Business Study Mission (Asian Studies)", "value": "MGMT301"}, {"label": "MGMT317 Managing Process Improvement", "value": "MGMT317"}, {"label": "MGMT321 Business Study Mission (Globalisation)", "value": "MGMT321"}, {"label": "MGMT342 Organisational Aspects of Sustainable Innovation", "value": "MGMT342"}, {"label": "MGMT345 Digital Strategy in the Digital Media and Entertainment E-Commerce Ecosystem in Asia", "value": "MGMT345"}, {"label": "MGMT346 Wholesale Trade and Maritime Work-Study Elective", "value": "MGMT346"}, {"label": "MGMT614A Corporate Strategy", "value": "MGMT614A"}, {"label": "MGMT633 Strategic Initiative Project", "value": "MGMT633"}, {"label": "MGMT656 Management & Strategy", "value": "MGMT656"}, {"label": "MGMT710 Innovation Strategy", "value": "MGMT710"}, {"label": "MGMT711 Innovation Development", "value": "MGMT711"}, {"label": "MGMT712 Global Strategy and Strategic Management", "value": "MGMT712"}, {"label": "MGMT717 Research Methods I", "value": "MGMT717"}, {"label": "MGMT721 Innovation Commercialization", "value": "MGMT721"}, {"label": "MGMT726 Introductory Research Project", "value": "MGMT726"}, {"label": "MGMT728 Business Research", "value": "MGMT728"}, {"label": "MGMT732 Academic Writing Workshop", "value": "MGMT732"}, {"label": "MGMT737 Strategy", "value": "MGMT737"}, {"label": "MGMT744 Research in China Economy", "value": "MGMT744"}, {"label": "MGMT747 Research in Innovation and Technology Management", "value": "MGMT747"}, {"label": "MGMT751 Qualitative Method", "value": "MGMT751"}, {"label": "MGMT752 Business Analytics", "value": "MGMT752"}, {"label": "MGMT753 Quantitative Method", "value": "MGMT753"}, {"label": "MGMT755 Social Networks", "value": "MGMT755"}, {"label": "MGMT757 Experimental Methods for Business", "value": "MGMT757"}, {"label": "MGMT758 Creativity and Innovation Research: Asian and Global", "value": "MGMT758"}, {"label": "MGMT759 Statistics II", "value": "MGMT759"}, {"label": "MGMT6003 Solving a Human Capital Challenge from Business Perspective", "value": "MGMT6003"}, {"label": "MGMT6006 Management of Technological Innovations", "value": "MGMT6006"}, {"label": "MGMT6007 HC Analytics and Research for Management Insights", "value": "MGMT6007"}, {"label": "MGMT6015 Solving a Human Capital Challenge from Business Perspective", "value": "MGMT6015"}, {"label": "MGMT6017 Sustainable Impact", "value": "MGMT6017"}, {"label": "MGMT6018 Internship", "value": "MGMT6018"}, {"label": "MGMT6023 Internship", "value": "MGMT6023"}, {"label": "MGMT6024 Internship", "value": "MGMT6024"}, {"label": "MGMT6026 Entrepreneurial Mindset and Business Planning", "value": "MGMT6026"}, {"label": "MGMT6027 Communicating Across Cultures", "value": "MGMT6027"}, {"label": "MGMT6033 Creativity as Precursor to Innovation", "value": "MGMT6033"}, {"label": "MGMT6034 Ethics and Corporate Social Responsibility", "value": "MGMT6034"}, {"label": "MGMT6037 Internship", "value": "MGMT6037"}, {"label": "MGMT6041 Capstone Project II", "value": "MGMT6041"}, {"label": "MGMT6043 Design Thinking for Opportunity Recognition and Innovation", "value": "MGMT6043"}, {"label": "MGMT6048 Internship", "value": "MGMT6048"}, {"label": "MGMT6049 Internship", "value": "MGMT6049"}, {"label": "MGMT6050 Internship", "value": "MGMT6050"}, {"label": "MGMT6054 Human Capital and Business Strategy", "value": "MGMT6054"}], "MKTG": [{"label": "MKTG.220 Digital Marketing", "value": "MKTG.220"}, {"label": "MKTG101 Marketing", "value": "MKTG101"}, {"label": "MKTG102 Consumer Behaviour", "value": "MKTG102"}, {"label": "MKTG103 Marketing Research", "value": "MKTG103"}, {"label": "MKTG204 Services Marketing", "value": "MKTG204"}, {"label": "MKTG205 Advertising", "value": "MKTG205"}, {"label": "MKTG215 New Product Development", "value": "MKTG215"}, {"label": "MKTG217 Strategic Brand Management", "value": "MKTG217"}, {"label": "MKTG219 Marketing Channels and New Retail", "value": "MKTG219"}, {"label": "MKTG225 Customer Relationship Management", "value": "MKTG225"}, {"label": "MKTG227 Integrated Marketing Communications: A Brand Perspective", "value": "MKTG227"}, {"label": "MKTG228 Marketing Analytics", "value": "MKTG228"}, {"label": "MKTG313 Pricing", "value": "MKTG313"}, {"label": "MKTG618 Marketing Management", "value": "MKTG618"}, {"label": "MKTG624 Consumer Analytics", "value": "MKTG624"}, {"label": "MKTG628 Digital Marketing", "value": "MKTG628"}, {"label": "MKTG637 Marketing Research", "value": "MKTG637"}, {"label": "MKTG640 Behavioural Science in Marketing", "value": "MKTG640"}, {"label": "MKTG702 Theory Construction", "value": "MKTG702"}, {"label": "MKTG703 Marketing Strategy", "value": "MKTG703"}, {"label": "MKTG710 Marketing in the Digital Age", "value": "MKTG710"}], "POSC": [{"label": "POSC003 Introduction to Political and Policy Studies", "value": "POSC003"}, {"label": "POSC101 Introduction to Public Policy", "value": "POSC101"}, {"label": "POSC203 Comparing Political Systems", "value": "POSC203"}, {"label": "POSC210 Political Economy of East Asia", "value": "POSC210"}, {"label": "POSC211 European Union Politics", "value": "POSC211"}, {"label": "POSC215 Democracy", "value": "POSC215"}, {"label": "POSC219 Political Theory", "value": "POSC219"}, {"label": "POSC308 Gender Politics: Exclusion and Empowerment", "value": "POSC308"}, {"label": "POSC310 Development, Underdevelopment and Poverty", "value": "POSC310"}, {"label": "POSC401 Senior Thesis in Political Issue", "value": "POSC401"}], "PPPM": [{"label": "PPPM101 Public Sector Management", "value": "PPPM101"}, {"label": "PPPM106 Policy Design and Analysis", "value": "PPPM106"}, {"label": "PPPM301 Public Policy Task Force", "value": "PPPM301"}], "PSYC": [{"label": "PSYC001 Introduction to Psychology", "value": "PSYC001"}, {"label": "PSYC103 Cognitive Psychology", "value": "PSYC103"}, {"label": "PSYC105 Industrial and Organisational Psychology", "value": "PSYC105"}, {"label": "PSYC108 Social Psychology", "value": "PSYC108"}, {"label": "PSYC110 Psychology Research Methods I", "value": "PSYC110"}, {"label": "PSYC111 Subjective Well-Being", "value": "PSYC111"}, {"label": "PSYC112 Health Psychology", "value": "PSYC112"}, {"label": "PSYC204 Psychology of Reasoning and Thinking", "value": "PSYC204"}, {"label": "PSYC208 Psychology Research Methods II", "value": "PSYC208"}, {"label": "PSYC209 Psychology of Close Relationships", "value": "PSYC209"}, {"label": "PSYC211 Cyberpsychology: Technology and The Human Mind", "value": "PSYC211"}, {"label": "PSYC401 Senior Thesis in Psychology", "value": "PSYC401"}, {"label": "PSYC402 Guided Research in Social Science (Psychology)", "value": "PSYC402"}, {"label": "PSYC601 Research Methods in Social and Behavioural Sciences", "value": "PSYC601"}, {"label": "PSYC603 General Linear Model", "value": "PSYC603"}, {"label": "PSYC625 Psychology of the Self", "value": "PSYC625"}, {"label": "PSYC701 Empirical Research Project", "value": "PSYC701"}, {"label": "PSYC721 Group Processes and Intergroup Relations", "value": "PSYC721"}, {"label": "PSYC727 Cognition and Development", "value": "PSYC727"}], "QF": [{"label": "QF.205 Computing Technology For Finance", "value": "QF.205"}, {"label": "QF.305 Global Financial Risk Management", "value": "QF.305"}, {"label": "QF101 Quantitative Finance", "value": "QF101"}, {"label": "QF102 Investment Statistics", "value": "QF102"}, {"label": "QF600 Asset Pricing", "value": "QF600"}, {"label": "QF602 Derivatives", "value": "QF602"}, {"label": "QF603 Quantitative Analysis of Financial Markets", "value": "QF603"}, {"label": "QF620 Stochastic Modelling in Finance", "value": "QF620"}, {"label": "QF627 Programming and Computational Finance", "value": "QF627"}], "SOCG": [{"label": "SOCG\tSOCG001 Understanding Societies", "value": "SOCG001"}, {"label": "SOCG110 Deconstructing Singapore Society", "value": "SOCG110"}, {"label": "SOCG201 Social Stratification and Inequality", "value": "SOCG201"}, {"label": "SOCG203 Gender and Family", "value": "SOCG203"}, {"label": "SOCG215 Introduction to Sociological Theory", "value": "SOCG215"}, {"label": "SOCG220 Sociology of Terrorism and Political Violence", "value": "SOCG220"}, {"label": "SOCG401 Senior Thesis in Sociology", "value": "SOCG401"}], "COR-MGMT": [{"label": "COR-MGMT1302 Business, Government and Society", "value": "COR-MGMT1302"}, {"label": "COR-MGMT2207 Innovations for Asia\u2019s Smart Cities", "value": "COR-MGMT2207"}, {"label": "COR-MGMT2211 Harnessing Robotics, UAVs, and Digital Innovation for Business", "value": "COR-MGMT2211"}], "COR-STAT": [{"label": "COR-STAT1202 Introductory Statistics", "value": "COR-STAT1202"}, {"label": "COR-STAT1203 Introduction to Statistical Theory", "value": "COR-STAT1203"}]}
const keys = Object.keys(mods)
const user = {
  "user": [
    {
      "major": {
        "name": "Smart City Society"
      },
      "sem": {
        "Y1S1": ["IS111 Introduction to Programming", "SMT113 Sensors and IOT", "COR2204 Science Meets Society", "IS110 Information Systems and Innovation"],
        "Y1S2": ["IS112 Data Management", "IS217 Analytics Foundation", "COR1701 Critical Thinking in the Real World",  "CS101 Programming Fundamentals I"],
        "Y2S1": [],
        "Y2S2": [],
        "Y3S1": [],
        "Y3S2": [],
        "Y4S1": [],
        "Y4S2": []
      }
    }
  ]
}

var currentBoard = 0

//['IS', 'ACCT', 'COR', 'CS', 'SMT', 'DSA', 'ECON', 'FNCE', 'LAW', 'MGMT', 'MKTG', 'POSC', 'PPPM', 'PSYC', 'QF', 'SOCG', 'COR-MGMT', 'COR-STAT']
const modColor = {
  "CO": "#853AD7",
  "IS": "rgb(127, 133, 255)",
  "SM": "green"
}

function toggleFocus(){
  $("#mainBoard").toggleClass("focus");
}

function toggleTrack() {
  $("#trackBar").toggleClass("toggleTrack")
}

function toggleSidebar() {
  $("#sideBar").toggleClass("hideSideBar")
  $("#mainContainer").toggleClass("expandMain")
  var arrow = $("#closeSidebar > p")
  var text = arrow.text()

  if (text === "<") {
    arrow.text(">");
  } else {
    arrow.text("<");
  }
  
}

function generateKanban(sem = user.user[0].sem ) {
  $("#mainBoard").empty()
  $.each(sem, function(key, value) {
    var semContainer = $("<div>").attr({
      class : "semContainer droppable",
    });

    semContainer.append("<div class = 'semTitle'>"+"<h2>" + key + "</h2>"+"</div>");

    for (index in value) {

      text = value[index]
      style = "margin-top: 10px; position: relative;"
      module = createModule(text, style)

      module.appendTo(semContainer)
    }

    // clone.children("H1").html(key)
    semContainer.appendTo($("#mainBoard"))
  })

    // Make all elements with the class "droppable" droppable
    $(".droppable").droppable({
      drop: function(event, ui) {
        // Move the draggable element to the droppable element
        console.log(event)
        ui.draggable.appendTo($(this));
        ui.draggable.css("top", 0)
        ui.draggable.css("left", 0)
        ui.draggable.attr("style", "width:95%; height: 100px; margin-top: 10px; position: relative;")
      }
    });

    var left = 0

    $("#mainContainer").on('wheel', function(event) {
      // Calculate the delta of the scroll event.
      var delta = event.originalEvent.wheelDelta;
      left += delta
      // Scroll the horizontal scroll container.
      $('.horizontalScroll').scrollLeft(left);
    });
  

}


function getBoard(index) {
  updateData = {}
  $(".semContainer").each(function(){
    var title = $(this).children(":first-child").text()
    var items = $(this).children(":not(:first-child)")
    var mods = []
    $.each(items, function() {
      var module = $(this).children(":not(:first-child)")
      var text = ""
      $.each(module, function() {
          text += $(this).text()
          text += " "
      })
      mods.push(text)
    })
    updateData[title] = mods
  }) 
  console.log(updateData)
  var boards = JSON.parse(localStorage.getItem("Boards")) 
  boards[currentBoard]["data"]["user"][0]["sem"] = updateData
  localStorage.setItem("Boards", JSON.stringify(boards))

  $(".tab").each(function() {
    if($(this).hasClass("selectTab")){
      $(this).removeClass("selectTab")
    }
  })
  $(".tab").eq(index).addClass("selectTab")
  var board = boards[index]
  generateKanban(board["data"]["user"][0]["sem"])

  currentBoard = index
}


function createTab(boardName) {
  var tab = $("<div>").attr({
    class: "tab"
  })

  tab.append("<p>" + boardName + "</p>")

  return tab 
}

function createModule(text, style){
    var module = $("<div>").attr({
      // id: "drag" + String(count),
      class: "moduleCard draggable",
      style: style
    });
    module.draggable()
    
    var course_id = text.split(' ')[0]
    var color = modColor[course_id.substring(0, 2)]
    var course_name = text.split(' ').slice(1).join(' ')
    module.append("<div class = 'moduleColor' style = 'background-color: " + color + "';>'" + "</div")
    module.append("<p style = 'font-size: larger; font-weight: bold;'>" + course_id + "</p>" );
    module.append("<p>" + course_name + "</p>" );

    return module
}

function addTab(first = false){
  if (first) {
    var firstBoard = {}
    var board_no = `board_1`
    firstBoard["No"] = "board_1"
    firstBoard["data"] = user
    var newBoards = []
    newBoards.push(firstBoard)
    localStorage.setItem("Boards", JSON.stringify(newBoards))
    // show first bar selected
  }
  else{
    var boards = JSON.parse(localStorage.getItem("Boards"))
    var board_no = `board_${boards.length + 1}`
    var board = {}
    
    board["No"] = board_no
    // change assignment based on functionality
    board["data"] = user 

    boards.push(board)
    localStorage.setItem("Boards", JSON.stringify(boards))
  }

  Tab = createTab(board_no)

  Tab.click(function(event) {

    getBoard($(this).index())
    
  })

  Tab.appendTo($("#tabContainer"))

  if (first){
    $(".tab").eq(0).addClass("selectTab")
  }
}

function filterMods(searchTerm) {
  console.log(keys)
  var results = {}
  for (c in keys){
    results[keys[c]] = mods[keys[c]].filter(function(course) {
      return course.label.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  [].concat.apply([], Object.values(results));
  return results
}

function search() {
  $("#searchbar").keyup(function() {
    // Get the search term
    var searchTerm = $(this).val();

    // Filter the JSON data based on the search term
    var filteredData = filterMods(searchTerm)

    // Update the search results with the filtered JSON data
    $("#searchResult").empty();
    var count = 0

    for (idx in filteredData) {
    
      var faculty = filteredData[idx]
      for (i in faculty){
        if (count === 20) {
          return;
        }
        var course = faculty[i]
        text = course.label
        module = createModule(text, style)

        module.appendTo($("#searchResult"))
        count++ 
      }
    }

  });
}


$(document).ready(function() {
  
  addTab(true)

  search()

  generateKanban()


})

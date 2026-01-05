const currentQuiz = [
  {
    question: "POST stands for:",
    options: [
      "Power On Self Test",
      "Program Output System Test",
      "Primary OS Test",
      "None"
    ],
    answer: 0
  },
  {
    question: "Which is volatile memory?",
    options: ["ROM", "Hard Disk", "RAM", "DVD"],
    answer: 2
  },
  {
    question: "Windows is an example of:",
    options: [
      "Application software",
      "System software",
      "Utility software",
      "Antivirus"
    ],
    answer: 1
  },
  {
    question: "CPU mainly consists of:",
    options: [
      "ALU & CU",
      "RAM & ROM",
      "Monitor & Keyboard",
      "Printer & Scanner"
    ],
    answer: 0
  },
  {
    question: "BIOS is stored in:",
    options: [
      "RAM",
      "ROM",
      "Cache",
      "Hard Disk"
    ],
    answer: 1
  },
  {
    question: "Bit stands for:",
    options: [
      "Binary Digit",
      "Byte Integer",
      "Basic Input",
      "None"
    ],
    answer: 0
  },
  {
    question: "1 MB equals:",
    options: [
      "1000 KB",
      "1024 KB ",
      "1024 Bytes",
      "100 Bytes"
    ],
    answer: 1
  },
  {
    question: "Which is an input device?",
    options: [
      "Monitor",
      "Keyboard",
      "Printer",
      "Speaker"
    ],
    answer: 1
  },
  {
    question: "Which is secondary storage?",
    options: [
      "RAM",
      "Cache",
      "Register",
      "Hard Disk"
    ],
    answer: 3
  },
  {
    question: "Firmware is stored in:",
    options: [
      "RAM",
      "ROM",
      "CPU",
      "HDD"
    ],
    answer: 1
  },
  {
    question: "Computer works on which number system? ",
    options: [
      "Decimal",
      "Octal",
      "Binary",
      "Hexadecimal"
    ],
    answer: 2
  },
  {
    question: "OS acts as an interface between:  ",
    options: [
      "User & Hardware",
      "Software & Software",
      "User & User",
      "Internet & User "
    ],
    answer: 0
  },
  {
    question: "Shortcut to open Task Manager:",
    options: [
      "Ctrl + T",
      "Ctrl + Shift + Esc",
      "Alt + F4",
      "Ctrl + Alt + P"
    ],
    answer: 1
  },
  {
    question: "File deleted normally goes to: ",
    options: [
      "Control Panel ",
      "Desktop",
      "Recycle Bin",
      "Drive C "
    ],
    answer: 2
  },
  ,
  {
    question: "URL stands for:",
    options: [
      "Uniform Resource Locator",
      "Universal Reference Link",
      "Unified Resource Link",
      "None"
    ],
    answer: 0
  },
  {
    question: "Ctrl + C is used for: ",
    options: [
      "Cut",
      "Copy",
      "Paste",
      "Close"
    ],
    answer: 1
  },
  {
    question: "Ctrl + X is used for: ",
    options: [
      "Copy",
      "Cut",
      "Paste",
      "Undo"
    ],
    answer: 1
  },
  {
    question: "Shortcut for permanent delete:  ",
    options: [
      "Delete",
      "Ctrl + Delete",
      "Shift + Delete",
      "Alt + Delete"
    ],
    answer: 2
  },
  {
    question: "Windows Explorer is used for: ",
    options: [
      "Internet",
      "File Management",
      "Email",
      "Antivirus"
    ],
    answer: 1
  },
  {
    question: "Extension of executable file: ",
    options: [
      ".docx ",
      ".xlsx",
      ".exe",
      ".pptx "
    ],
    answer: 2
  },
  {
    question: "Booting means:",
    options: [
      "Shutdown",
      "Restart",
      "Starting computer",
      "Formatting"
    ],
    answer: 2
  },
  {
    question: "Writer is used for: ",
    options: [
      "Calculation",
      "Presentation",
      "Word Processing ",
      "Drawing"
    ],
    answer: 2
  },
  {
    question: "Shortcut to save document:",
    options: [
      "Ctrl + A",
      "Ctrl + S",
      "Ctrl + P",
      "Ctrl + D"
    ],
    answer: 1
  },
  {
    question: "Ctrl + B is for:",
    options: [
      "Bold",
      "Italic",
      "Underline",
      "Break"
    ],
    answer: 0
  },
  {
    question: "Ctrl + I is for:",
    options: [
      "Indent",
      "Italic",
      "Insert",
      "Index "
    ],
    answer: 1
  },
  {
    question: "Ctrl + U is for:",
    options: [
      "Uppercase",
      "Undo",
      "Underline",
      "Update"
    ],
    answer: 2
  },
  {
    question: "Header appears at:",
    options: [
      "Bottom",
      "Top",
      "Middle",
      "Margin"
    ],
    answer: 1
  },
  {
    question: "Footer appears at:",
    options: [
      "Bottom",
      "Top",
      "Center",
      "Side"
    ],
    answer: 0
  },
  {
    question: "Page Break shortcut:",
    options: [
      "Ctrl + B",
      "Ctrl + Enter",
      "Ctrl + Shift",
      "Ctrl + P"
    ],
    answer: 1
  },
  {
    question: "Spell check shortcut:",
    options: [
      "F2",
      "F5",
      "F7",
      "F9"
    ],
    answer: 2
  },
  {
    question: "Default file extension of Writer:",
    options: [
      ".doc",
      ".odt ",
      ".txt",
      ".pdf"
    ],
    answer: 1
  },
  {
    question: "Spreadsheet is used for:",
    options: [
      "Drawing",
      "Calculation",
      "Email",
      "Presentation"
    ],
    answer: 1
  },
  {
    question: "Rows are identified by: ",
    options: [
      "Letters",
      "Numbers",
      "Symbols",
      "Colors"
    ],
    answer: 1
  },
  {
    question: "Columns are identified by:",
    options: [
      "Letters",
      "Numbers",
      "Symbols",
      "Fonts"
    ],
    answer: 0
  },
  {
    question: "Cell address example:",
    options: [
      "1A",
      "A1",
      "AB",
      "11"
    ],
    answer: 1
  },
  {
    question: "Formula starts with:",
    options: [
      "+",
      "–",
      "=",
      "* "
    ],
    answer: 2
  },
  {
    question: "Function to add values:",
    options: [
      "AVG",
      "COUNT",
      "SUM",
      "MAX"
    ],
    answer: 2
  },
  {
    question: "Function to count numbers:",
    options: [
      "SUM",
      "COUNT",
      "AVG",
      "MIN"
    ],
    answer: 1
  },
  {
    question: "Workbook contains:",
    options: [
      "Rows",
      "Columns",
      "Worksheets",
      "Charts"
    ],
    answer: 2
  },
  {
    question: "Filter is used to:",
    options: [
      "Delete data",
      "Sort data",
      "Display selected data ",
      "Format data"
    ],
    answer: 2
  },
  {
    question: "Chart is used to:",
    options: [
      "Store data",
      "Calculate",
      "Graphical representation",
      "Print"
    ],
    answer: 2
  },
  {
    question: "Presentation software is: ",
    options: [
      "Calc",
      "Writer",
      "Impress",
      "Paint"
    ],
    answer: 2
  },
  {
    question: "New slide shortcut:",
    options: [
      "Ctrl + N ",
      "Ctrl + M",
      "Ctrl + S",
      "Ctrl + P"
    ],
    answer: 1
  },
  {
    question: "Slide show shortcut:",
    options: [
      "F2",
      "F5",
      "F7",
      "F9"
    ],
    answer: 1
  },
  {
    question: "Animation affects:",
    options: [
      "Slide",
      "Text/Object",
      "Background",
      "Theme"
    ],
    answer: 1
  },
  {
    question: "Transition applies to:",
    options: [
      "Object",
      "Text",
      "Slide change",
      "Chart"
    ],
    answer: 2
  },
  {
    question: "WWW stands for:",
    options: [
      "WWW stands for:",
      "World Wide Web",
      "Web World Wide",
      "Wide Web World "
    ],
    answer: 1
  },
  {
    question: "Browser example:",
    options: [
      "Windows",
      "Chrome",
      "Linux",
      "Excel"
    ],
    answer: 1                                                   
  },
  {
    question: "Search engine example:",
    options: [
      "Gmail",
      "Google",
      "Facebook",
      "WhatsApp"
    ],
    answer: 1
  },
  {
    question: "URL stands for:",
    options: [
      "Uniform Resource Locator",
      "Universal Reference Link",
      "Unified Resource Link",
      "None"
    ],
    answer: 0
  },
  {
    question: "Email attachment is used to:",
    options: [
      "Write mail",
      "Send files",
      "Delete mai",
      "Print mail"
    ],
    answer: 1
  },
  {
    question: "Phishing is:",
    options: [
      "Virus",
      "Fake email attack ",
      "Hardware failure",
      "Software update"
    ],
    answer: 1
  },
  {
    question: "Antivirus is used to:",
    options: [
      "Format PC",
      "Protect from malware",
      "Increase speed",
      "Design"
    ],
    answer: 1
  },
  {
    question: "UPI full form",
    options: [
      "Unified Payment Interface ",
      "Universal Payment India",
      "Unique Payment ID ",
      "User Payment Interface"
    ],
    answer: 0
  },
  {
    question: "IMPS stands for:",
    options: [
      "Immediate Payment Service",
      "Indian Money Payment System",
      "Internet Payment System",
      "None"
    ],
    answer: 0
  },
  {
    question: "Which one is a strong password?",
    options: [
      "123456",
      "password",
      "Ab@1234",
      "abc"
    ],
    answer: 2
  },
  {
    question: "Firewall is used for:",
    options: [
      "Formatting",
      "Network security",
      "Printing",
      "Scanning"
    ],
    answer: 1
  },
  {
    question: "Which malware locks user data for ransom?",
    options: [
      "Virus",
      "Worm",
      "Trojan",
      "Ransomware "
    ],
    answer: 3
  },
  {
    question: "OTP is mainly used for:",
    options: [
      "Speed",
      "Authentication",
      "Storage",
      "Formatting"
    ],
    answer: 1
  },
  {
    question: "Which is a UPI app? ",
    options: [
      "Paytm",
      "BHIM",
      "Google Pay",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Inbox contains: ",
    options: [
      "Sent mails",
      "Draft mails",
      "Received mails",
      "Deleted mails"
    ],
    answer: 2
  },
  {
    question: "Spam mail means:",
    options: [
      "Important mail",
      "Personal mail",
      "Unwanted mail",
      "Draft mail"
    ],
    answer: 2
  },
  {
    question: "CC in email stands for:",
    options: [
      "Carbon Copy",
      "Current Copy",
      "Computer Code ",
      "Control Copy"
    ],
    answer: 0
  },
  {
    question: "BCC stands for:",
    options: [
      "Blind Carbon Copy ",
      "Backup Carbon Copy",
      "Binary Copy Code",
      "Basic Control Copy "
    ],
    answer: 0
  },
  {
    question: "@ symbol in email indicates:",
    options: [
      "Domain separator",
      "User name",
      "Password",
      "Protocol"
    ],
    answer: 0
  },
  {
    question: "Which protocol is used to send emails?",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "POP"
    ],
    answer: 2
  },
  {
    question: "Which protocol is used to receive emails? ",
    options: [
      "SMTP",
      "POP3",
      "HTTP",
      "FTP "
    ],
    answer: 1
  },
  {
    question: "Download means: ",
    options: [
      "Upload data",
      "Save from internet",
      "Delete data",
      "Share data "
    ],
    answer: 1
  },
  {
    question: "Upload means: ",
    options: [
      "Save data",
      "Copy data",
      "Send data to internet",
      "Delete data"
    ],
    answer: 2
  },
  {
    question: "WWW is a part of:",
    options: [
      "LAN",
      "MAN",
      "Internet",
      "Intranet"
    ],
    answer: 2
  },
  {
    question: "Digital India is a: ",
    options: [
      "Private company",
      "Government initiative",
      "Software",
      "Hardware"
    ],
    answer: 1
  },
  {
    question: "Aadhaar is issued by:",
    options: [
      "RBI",
      "UIDAI",
      "SBI",
      "IT Dept"
    ],
    answer: 1
  },
  {
    question: "PAN is used for: ",
    options: [
      "Identity only ",
      "Banking only",
      "Tax purpose",
      "Voting"
    ],
    answer: 2
  },
  {
    question: "E-Governance means:",
    options: [
      "Manual work",
      "Paperless work",
      "Government services using ICT",
      "Internet banking "
    ],
    answer: 2
  },
  {
    question: "Online railway ticket booking is an example of:",
    options: [
      "E-Learning",
      "E-Commerce",
      "E-Governance",
      "E-Business"
    ],
    answer: 2
  },
  {
    question: "Cloud computing means:",
    options: [
      "Local storage ",
      "Offline computing ",
      "Internet based computing",
      "Hardware computing "
    ],
    answer: 2
  },
  {
    question: "Example of cloud storage:",
    options: [
      "Pen Drive",
      "Hard Disk",
      "Google Drive ",
      "DVD"
    ],
    answer: 2
  },
  {
    question: "ICT stands for: ",
    options: [
      "Information Computer Technology",
      "Internet Communication Tool",
      "Information & Communication Technology ",
      "Integrated Computer Technology"
    ],
    answer: 2
  },
  {
    question: "Telemedicine is related to:",
    options: [
      "Education",
      "Banking",
      "Health services",
      "Agriculture"
    ],
    answer: 2
  },
  {
    question: "E-learning means:",
    options: [
      "Classroom learning ",
      "Online learning",
      "Offline learning",
      "Distance by post"
    ],
    answer: 1
  },
  {
    question: "Multitasking means:",
    options: [
      "One task at a time ",
      "Multiple users",
      "Multiple tasks at same time",
      "Multiple computers"
    ],
    answer: 2
  },
  {
    question: "Cache memory is:",
    options: [
      "Slow",
      "Very slow",
      "Fast",
      "External"
    ],
    answer: 2
  },
  {
    question: "ALU performs:",
    options: [
      "Storage",
      "Logic operations",
      "Input",
      "Output"
    ],
    answer: 1
  },
  {
    question: "CU stands for: ",
    options: [
      "Central Unit",
      "Control Unit",
      "Computer Unit",
      "Command Unit"
    ],
    answer: 1
  },
  {
    question: "Which is NOT an output device?",
    options: [
      "Monitor",
      "Printer",
      "Scanner",
      "Speaker "
    ],
    answer: 2
  },
  {
    question: "Booting starts from: ",
    options: [
      "RAM",
      "ROM",
      "Hard Disk",
      "Cache"
    ],
    answer: 1
  },
  {
    question: "Which key refreshes a webpage?",
    options: [
      "F2",
      "F5",
      "F7",
      "F9"
    ],
    answer: 1
  },
  {
    question: "PDF stands for: ",
    options: [
      "Personal Document File",
      "Portable Document Format",
      "Public Data File",
      "Printed Data Format"
    ],
    answer: 1
  },
  {
    question: "Virus spreads mainly through:",
    options: [
      "Hardware",
      "Software",
      "Email & USB",
      "Monitor"
    ],
    answer: 2
  },
  {
    question: "Antivirus software example:",
    options: [
      "Windows",
      "MS Word",
      "Quick Heal",
      "Excel"
    ],
    answer: 2
  },
  {
    question: "Which one is open-source OS?",
    options: [
      "Windows",
      "Linux",
      "DOS",
      "MS Office"
    ],
    answer: 1
  },
  {
    question: "GUI means:",
    options: [
      "General User Interface",
      "Graphical User Interface ",
      "Global User Internet",
      "Graphic Utility Interface"
    ],
    answer: 1
  },
  {
    question: "LibreOffice is: ",
    options: [
      "Paid software",
      "Open-source software ",
      "Hardware",
      "Virus"
    ],
    answer: 1
  },
  {
    question: "Impress is similar to:",
    options: [
      "MS Word",
      "MS Excel ",
      "MS PowerPoint",
      "MS Access"
    ],
    answer: 2
  },
  {
    question: "Calc is similar to:",
    options: [
      "MS Word",
      "MS Excel ",
      "MS Paint",
      "MS Outlook"
    ],
    answer: 1
  },
  {
    question: "Writer is similar to:",
    options: [
      "Excel",
      "Word",
      "PowerPoint",
      "Paint"
    ],
    answer: 1
  },
  {
    question: "Default page orientation is:",
    options: [
      "Landscape",
      "Portrait",
      "Square",
      "Custom"
    ],
    answer: 1
  },
  {
    question: "Shortcut to print document: ",
    options: [
      "Ctrl + S",
      "Ctrl + C",
      "Ctrl + P",
      "Ctrl + V"
    ],
    answer: 2
  },
  {
    question: "Save As shortcut in LibreOffice:",
    options: [
      "Ctrl + S",
      "Ctrl + Shift + S",
      "Ctrl + P",
      "Ctrl + A"
    ],
    answer: 1
  },
  {
    question: "CCC course is mainly for:",
    options: [
      "Programming experts",
      "Advanced engineers",
      "Basic computer literacy",
      "Hardware technicians"
    ],
    answer: 2
  }
];

loadQuiz(currentQuiz);

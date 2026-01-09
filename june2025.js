const currentQuiz = [
    {
    question: "Computer is an electronic device that:",
    options: [
      "Stores data only",
      "Processes data into information",
      "Prints documents",
      "Connects internet"
    ],
    answer: 1
  },
  {
    question: "CPU consists of:",
    options: ["RAM & ROM", "ALU & CU", "Monitor & Keyboard", "Hard Disk & Printer"],
    answer: 1
  },
  {
    question: "ALU is used for:",
    options: [
      "Storage",
      "Input",
      "Arithmetic & logical operations",
      "Output"
    ],
    answer: 2
  },
  {
    question: "CU stands for:",
    options: [
      "Central Unit",
      "Control Unit",
      "Computer Unit",
      "Core Unit"
    ],
    answer: 1
  },
  {
    question: "Which memory is volatile?",
    options: [
      "ROM",
      "Hard Disk",
      "RAM",
      "DVD"
    ],
    answer: 2
  },
  {
    question: "Which memory is non-volatile?",
    options: [
      "RAM",
      "Cache",
      "Register",
      "ROM"
    ],
    answer: 3
  },
  {
    question: "1 GB equals",
    options: [
      "1000 MB",
      "1024 MB ",
      "1024 KB",
      "100 MB"
    ],
    answer: 1
  },
  {
    question: "Binary number system uses digits:",
    options: [
      "0–9",
      "0–7",
      "0 & 1",
      "1–9"
    ],
    answer: 2
  },
  {
    question: "Bit stands for:",
    options: [
      "Binary Integer",
      "Binary Digit",
      "Basic Input",
      "Byte Item"
    ],
    answer: 1
  },
  {
    question: "Firmware is stored in:",
    options: [
      "RAM",
      "Hard Disk",
      "ROM",
      "Cache"
    ],
    answer: 2
  },
  {
    question: "Which is an input device?",
    options: [
      "Printer",
      "Monitor",
      "Keyboard",
      "Speaker"
    ],
    answer: 2
  },
  {
    question: "Which device is used to input images? ",
    options: [
      "Printer",
      "Scanner",
      "Speaker",
      "Plotter"
    ],
    answer: 1
  },
  {
    question: "Which is an output device? ",
    options: [
      "Mouse",
      "Keyboard",
      "Monitor",
      "Scanner"
    ],
    answer: 2
  },
  {
    question: "Which device prints on paper?",
    options: [
      "Scanner",
      "Plotter",
      "Printer",
      "Monitor"
    ],
    answer: 2
  },
  ,
  {
    question: "Hard disk is an example of:",
    options: [
      "Primary memory",
      "Secondary storage",
      "Cache",
      "Register"
    ],
    answer: 1
  },
  {
    question: "Pen drive uses:",
    options: [
      "Optical storage",
      "Magnetic storage",
      "Flash memory",
      "RAM"
    ],
    answer: 2
  },
  {
    question: "Which storage has fastest speed? ",
    options: [
      "Hard Disk",
      "RAM  ",
      "Cache",
      "DVD"
    ],
    answer: 2
  },
  {
    question: "CD-ROM capacity is about:",
    options: [
      "700 MB",
      "4.7 GB",
      "1 GB",
      "10 GB"
    ],
    answer: 0
  },
  {
    question: "Which device is used for audio output? ",
    options: [
      "Scanner",
      "Microphone",
      "Speaker",
      "Webcam"
    ],
    answer: 2
  },
  {
    question: "Webcam is used for:",
    options: [
      "Printing",
      "Video input",
      "Audio output",
      "Storage"
    ],
    answer: 1
  },
  {
    question: "Operating System acts as:",
    options: [
      "Application software",
      "Hardware",
      "Interface between user & hardware",
      "Virus"
    ],
    answer: 2
  },
  {
    question: "Example of Operating System:",
    options: [
      "MS Word",
      "Excel",
      "Windows",
      "Chrome"
    ],
    answer: 2
  },
  {
    question: "Linux is an example of:",
    options: [
      "Paid OS",
      "Closed source",
      "Open source OS",
      "Antivirus"
    ],
    answer: 2
  },
  {
    question: "Desktop is part of: ",
    options: [
      "Hardware",
      "Application software",
      "Operating System",
      "Internet"
    ],
    answer: 2
  },
  {
    question: "Shortcut to copy: ",
    options: [
      "Ctrl + X",
      "Ctrl + V",
      "Ctrl + C",
      "Ctrl + Z "
    ],
    answer: 2
  },
  {
    question: "Shortcut to paste:",
    options: [
      "Ctrl + P",
      "Ctrl + V",
      "Ctrl + X",
      "Ctrl + D"
    ],
    answer: 1
  },
  {
    question: "Shortcut to cut:",
    options: [
      "Ctrl + C",
      "Ctrl + X",
      "Ctrl + Z",
      "Ctrl + A"
    ],
    answer: 1
  },
  {
    question: "Deleted files go to:",
    options: [
      "Control Panel",
      "Desktop",
      "Recycle Bin",
      "Drive C"
    ],
    answer: 2
  },
  {
    question: "Permanent delete shortcut:",
    options: [
      "Delete",
      "Ctrl + Delete",
      "Shift + Delete",
      "Alt + Delete"
    ],
    answer: 2
  },
  {
    question: "Writer is used for:",
    options: [
      "Calculation",
      "Presentation",
      "Word processing",
      "Drawing"
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
    question: "Shortcut for bold text:",
    options: [
      "Ctrl + I",
      "Ctrl + U",
      "Ctrl + B",
      "Ctrl + D"
    ],
    answer: 2
  },
  {
    question: "Shortcut for italic text:",
    options: [
      "Ctrl + B",
      "Ctrl + I",
      "Ctrl + U",
      "Ctrl + P"
    ],
    answer: 1
  },
  {
    question: "Shortcut for underline",
    options: [
      "Ctrl + U",
      "Ctrl + I",
      "Ctrl + B",
      "Ctrl + T"
    ],
    answer: 0
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
    question: "Rows are represented by: ",
    options: [
      "Letters",
      "Numbers",
      "Symbols",
      "Colors"
    ],
    answer: 1
  },
  {
    question: "Columns are represented by:",
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
    question: "Impress is used for:",
    options: [
      "Word processing",
      "Presentation",
      "Calculation",
      "Drawing"
    ],
    answer: 1
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
    question: "Slide show starts with key:",
    options: [
      "F2",
      "F5",
      "F7",
      "F9"
    ],
    answer: 1
  },
  {
    question: "Animation applies to:",
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
    question: "Email is used for:",
    options: [
      "Printing",
      "Communication",
      "Calculation",
      "Formatting"
    ],
    answer: 1
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
    question: "Attachment is used to:",
    options: [
      "Delete mail",
      "Send files",
      "Format mail",
      "Print mail"
    ],
    answer: 0
  },
  {
    question: "SMTP is used for:",
    options: [
      "Receiving email",
      "Sending email",
      "Browsing",
      "Downloading"
    ],
    answer: 0
  },
  {
    question: "Antivirus is used to:",
    options: [
      "Format PC",
      "Remove viruses",
      "Increase speed",
      "Design"
    ],
    answer: 1
  },
  {
    question: "Malware means:",
    options: [
      "Hardware fault",
      "Malicious software",
      "Utility software",
      "System software"
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
    question: "OTP stands for:",
    options: [
      "One Time Password",
      "Online Transfer Protocol",
      "One Time Program",
      "Open Text Password"
    ],
    answer: 0
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
    question: "UPI stands for:",
    options: [
      "Unified Payment Interface ",
      "Universal Payment India",
      "Unique Payment ID ",
      "User Payment Interface"
    ],
    answer: 0
  },
  {
    question: "BHIM is related to:",
    options: [
      "Email",
      "Banking",
      "UPI payment ",
      "Shopping"
    ],
    answer: 2
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
    question: "Debit card money is deducted from:",
    options: [
      "Credit limit",
      "Wallet",
      "Bank account ",
      "Loan"
    ],
    answer: 2
  },
  {
    question: "QR code payment is an example of: ",
    options: [
      "Cash payment",
      "Digital payment",
      "Offline payment",
      "Manual payment"
    ],
    answer: 1
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
    question: "Refresh webpage shortcut:",
    options: [
      "F2",
      "F5",
      "F7",
      "F9"
    ],
    answer: 1
  },
  {
    question: "Which is open-source software?",
    options: [
      "MS Word",
      "Windows",
      "LibreOffice",
      "Photoshop"
    ],
    answer: 2
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
    question: "Impress is similar to:",
    options: [
      "Word",
      "Excel ",
      "PowerPoint",
      "Access"
    ],
    answer: 2
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
    question: "Print shortcut key:",
    options: [
      "Ctrl + S",
      "Ctrl + P",
      "Ctrl + C",
      "Ctrl + V"
    ],
    answer: 2
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
    question: "Strong password contains:",
    options: [
      "Only letters",
      "Only numbers",
      "Letters, numbers & symbols",
      "Name"
    ],
    answer: 2
  },
  {
    question: "Cloud storage example:",
    options: [
      "Pen drive",
      "Hard disk",
      "Google Drive",
      "CD"
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
    question: "Shut down means: ",
    options: [
      "Restart",
      "Sleep",
      "Properly turn off computer",
      "Log off"
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
    question: "CCC course is meant for:",
    options: [
      "Programmers",
      "Engineers",
      "Basic computer literacy",
      "Network admins"
    ],
    answer: 2
  },
  {
    question: "CCC exam is conducted by:",
    options: [
      "AICTE",
      "NIELIT",
      "UGC",
      "CBSE"
    ],
    answer: 1
  }
];
loadQuiz(currentQuiz);
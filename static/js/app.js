const mockupData = [
    {
      "FX Record ID": "6wr2kqz8uz8",
      "Call ID": "m5uumwc567",
      "Contact ID": "haxen2u7qn",
      "Org_ID": "pujq12gw9m",
      "Date and Time": "2025-01-18T18:50:21.662Z",
      "Call Type": "Inbound",
      "First Name": "John",
      "Last Name": "John",
      "Email": "john.john@gmail.com",
      "Phone Number": "(555) 679-7110",
      "Total Costs": "86.52",
      "Transport Model Voice VAPI Retell": "Model2",
      "Analysis": "Negative",
      "Ended Reason": "Completed",
      "Transfer Destination": "Eco-Friendly Products Co.",
      "Recording": "/path/to/recording1.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Bob",
      "Phone Number ID": "jtefppj85d",
      "Street": "70 W Red Oak Ln",
      "City": "New York",
      "Country": "United States",
      "Coordinates": "37.624628, -122.206658",
      "CP_Type": "TypeC",
      "Status": "Active",
      "Offer From": "Tandem",
      "Call Duration": "57 seconds",
      "Scoring": 9,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Michael",
      "Successful Appointment Scheduling": "Yes"
    },
    {
      "FX Record ID": "ijeh5j7r3z",
      "Call ID": "05l515kox35w",
      "Contact ID": "gkz2to6kfkp",
      "Org_ID": "5f2wa6riy2e",
      "Date and Time": "2025-01-18T04:39:27.502Z",
      "Call Type": "Inbound",
      "First Name": "Jane",
      "Last Name": "Alice",
      "Email": "jane.alice@gmail.com",
      "Phone Number": "(555) 540-2773",
      "Total Costs": "91.52",
      "Transport Model Voice VAPI Retell": "Model5",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Global Marketing Group",
      "Recording": "/path/to/recording2.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Emily",
      "Phone Number ID": "h7dzjhj43xr",
      "Street": "114 Glann Rd",
      "City": "New York",
      "Country": "United States",
      "Coordinates": "38.018272, -122.098017",
      "CP_Type": "TypeB",
      "Status": "Active",
      "Offer From": "Teachable",
      "Call Duration": "13 seconds",
      "Scoring": 6,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person David",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "ce5g1f4snfk",
      "Call ID": "ggdm97k17if",
      "Contact ID": "9efd1yuo8ds",
      "Org_ID": "b8p18cm76ig",
      "Date and Time": "2025-01-18T04:54:11.393Z",
      "Call Type": "Inbound",
      "First Name": "Tom",
      "Last Name": "Jessica",
      "Email": "tom.jessica@gmail.com",
      "Phone Number": "(555) 634-5618",
      "Total Costs": "53.02",
      "Transport Model Voice VAPI Retell": "Model4",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "HealthTech Systems",
      "Recording": "/path/to/recording3.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Sarah",
      "Phone Number ID": "300kvhi61i7",
      "Street": "24 Kellogg Rd",
      "City": "New York",
      "Country": "United States",
      "Coordinates": "41.16582, -121.140438",
      "CP_Type": "TypeC",
      "Status": "Active",
      "Offer From": "Trello",
      "Call Duration": "0 seconds",
      "Scoring": 3,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person John",
      "Successful Appointment Scheduling": "Yes"
    },
    {
      "FX Record ID": "c545mlkdup",
      "Call ID": "qhbcyijhrwa",
      "Contact ID": "i5ah9plo9a",
      "Org_ID": "yp6veeu29n",
      "Date and Time": "2025-01-18T02:23:04.432Z",
      "Call Type": "Inbound",
      "First Name": "Bob",
      "Last Name": "Tom",
      "Email": "bob.tom@gmail.com",
      "Phone Number": "(555) 345-7240",
      "Total Costs": "82.92",
      "Transport Model Voice VAPI Retell": "Model5",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Online Learning Platform",
      "Recording": "/path/to/recording4.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Alice",
      "Phone Number ID": "k6buk16vny",
      "Street": "4845 Transit Rd #K1",
      "City": "New York",
      "Country": "United States",
      "Coordinates": "39.123564, -122.993054",
      "CP_Type": "TypeA",
      "Status": "Active",
      "Offer From": "ServiceNow",
      "Call Duration": "46 seconds",
      "Scoring": 5,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Sarah",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "ish6mvadyd",
      "Call ID": "rv2j2drs0f",
      "Contact ID": "a5b9fdcr13i",
      "Org_ID": "lxjm9p55n5",
      "Date and Time": "2025-01-18T12:04:32.960Z",
      "Call Type": "Inbound",
      "First Name": "Sarah",
      "Last Name": "Michael",
      "Email": "sarah.michael@gmail.com",
      "Phone Number": "(555) 118-3217",
      "Total Costs": "96.64",
      "Transport Model Voice VAPI Retell": "Model4",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Urban Development Partners",
      "Recording": "/path/to/recording5.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Sarah",
      "Phone Number ID": "6rueu78lcaq",
      "Street": "5723 Morgan Ave",
      "City": "Los Angeles",
      "Country": "United States",
      "Coordinates": "35.007382, -119.642126",
      "CP_Type": "TypeC",
      "Status": "Active",
      "Offer From": "Amazon",
      "Call Duration": "13 seconds",
      "Scoring": 8,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person David",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "twx320vqgt",
      "Call ID": "7x128cel9xn",
      "Contact ID": "lwklazcmo9",
      "Org_ID": "mxe5yotn3xa",
      "Date and Time": "2025-01-18T12:39:00.066Z",
      "Call Type": "Inbound",
      "First Name": "David",
      "Last Name": "Jane",
      "Email": "david.jane@gmail.com",
      "Phone Number": "(555) 677-2299",
      "Total Costs": "67.40",
      "Transport Model Voice VAPI Retell": "Model5",
      "Analysis": "Negative",
      "Ended Reason": "Completed",
      "Transfer Destination": "NextGen Robotics",
      "Recording": "/path/to/recording6.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent John",
      "Phone Number ID": "8t7tc301x9e",
      "Street": "7609 Mckinley Ave",
      "City": "Los Angeles",
      "Country": "United States",
      "Coordinates": "37.971608, -122.615831",
      "CP_Type": "TypeB",
      "Status": "Active",
      "Offer From": "HubSpot",
      "Call Duration": "53 seconds",
      "Scoring": 4,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Michael",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "avj56p5gco",
      "Call ID": "xdymn3rpsoc",
      "Contact ID": "zmmoo3i60d",
      "Org_ID": "itqo3ozbvei",
      "Date and Time": "2025-01-18T15:13:47.117Z",
      "Call Type": "Inbound",
      "First Name": "Michael",
      "Last Name": "Tom",
      "Email": "michael.tom@gmail.com",
      "Phone Number": "(555) 244-6594",
      "Total Costs": "70.87",
      "Transport Model Voice VAPI Retell": "Model1",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Consumer Electronics Co.",
      "Recording": "/path/to/recording7.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Tom",
      "Phone Number ID": "e1zfz6vw61v",
      "Street": "680 E 47th St",
      "City": "Los Angeles",
      "Country": "United States",
      "Coordinates": "37.732599, -122.187295",
      "CP_Type": "TypeD",
      "Status": "Active",
      "Offer From": "Wix",
      "Call Duration": "0 seconds",
      "Scoring": 6,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Michael",
      "Successful Appointment Scheduling": "Yes"
    },
    {
      "FX Record ID": "99lp0sclarj",
      "Call ID": "cc3tm91bqd",
      "Contact ID": "zawms8945we",
      "Org_ID": "rv002qz8b",
      "Date and Time": "2025-01-17T22:05:56.619Z",
      "Call Type": "Inbound",
      "First Name": "Bob",
      "Last Name": "Jessica",
      "Email": "bob.jessica@gmail.com",
      "Phone Number": "(555) 294-9481",
      "Total Costs": "87.80",
      "Transport Model Voice VAPI Retell": "Model3",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "SecureCloud Technologies",
      "Recording": "/path/to/recording8.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent David",
      "Phone Number ID": "og6hshhgcwl",
      "Street": "2045 W Jackson Blvd",
      "City": "Chicago",
      "Country": "United States",
      "Coordinates": "34.069801, -118.179146",
      "CP_Type": "TypeD",
      "Status": "Active",
      "Offer From": "Miro",
      "Call Duration": "2 seconds",
      "Scoring": 1,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Sarah",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "e7c9dowjfru",
      "Call ID": "16bcjcnh4i4",
      "Contact ID": "vddydy3fvud",
      "Org_ID": "0qe7nw1h8xl",
      "Date and Time": "2025-01-18T08:57:37.112Z",
      "Call Type": "Inbound",
      "First Name": "Sarah",
      "Last Name": "Sarah",
      "Email": "sarah.sarah@gmail.com",
      "Phone Number": "(555) 427-8095",
      "Total Costs": "17.77",
      "Transport Model Voice VAPI Retell": "Model2",
      "Analysis": "Negative",
      "Ended Reason": "Completed",
      "Transfer Destination": "SecureCloud Technologies",
      "Recording": "/path/to/recording9.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Sarah",
      "Phone Number ID": "wum1iyehxy",
      "Street": "899 S Plymouth Ct",
      "City": "Chicago",
      "Country": "United States",
      "Coordinates": "33.513897, -117.705834",
      "CP_Type": "TypeA",
      "Status": "Active",
      "Offer From": "Cloudflare",
      "Call Duration": "49 seconds",
      "Scoring": 10,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Bob",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "rmbmz80g45o",
      "Call ID": "e24uj96mzq5",
      "Contact ID": "pnp8wptv19j",
      "Org_ID": "24uylyfvghx",
      "Date and Time": "2025-01-18T01:36:22.973Z",
      "Call Type": "Inbound",
      "First Name": "Tom",
      "Last Name": "Jane",
      "Email": "tom.jane@gmail.com",
      "Phone Number": "(555) 887-6439",
      "Total Costs": "38.61",
      "Transport Model Voice VAPI Retell": "Model3",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Travel and Leisure Agency",
      "Recording": "/path/to/recording10.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Emily",
      "Phone Number ID": "efl4xjuocc8",
      "Street": "12112 S Front Ave",
      "City": "Chicago",
      "Country": "United States",
      "Coordinates": "34.042851, -118.434865",
      "CP_Type": "TypeD",
      "Status": "Active",
      "Offer From": "Skillshare",
      "Call Duration": "21 seconds",
      "Scoring": 1,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person David",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "96u1ncvljio",
      "Call ID": "simxpzqsip",
      "Contact ID": "r6lsf99tp6g",
      "Org_ID": "8sklvu7covt",
      "Date and Time": "2025-01-18T06:56:42.430Z",
      "Call Type": "Inbound",
      "First Name": "Jane",
      "Last Name": "Bob",
      "Email": "jane.bob@gmail.com",
      "Phone Number": "(555) 612-1923",
      "Total Costs": "76.10",
      "Transport Model Voice VAPI Retell": "Model5",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Global Marketing Group",
      "Recording": "/path/to/recording11.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Tom",
      "Phone Number ID": "kk2m57uvck",
      "Street": "6634 W 64th Pl",
      "City": "Chicago",
      "Country": "United States",
      "Coordinates": "37.372441, -121.964574",
      "CP_Type": "TypeD",
      "Status": "Active",
      "Offer From": "AppDirect",
      "Call Duration": "51 seconds",
      "Scoring": 1,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Tom",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "4vkyvx2q0tb",
      "Call ID": "0splqc2b68z",
      "Contact ID": "23jxlmz9fzj",
      "Org_ID": "0onmvag2ldm",
      "Date and Time": "2025-01-18T12:34:42.972Z",
      "Call Type": "Inbound",
      "First Name": "Alice",
      "Last Name": "David",
      "Email": "alice.david@gmail.com",
      "Phone Number": "(555) 536-9466",
      "Total Costs": "32.59",
      "Transport Model Voice VAPI Retell": "Model2",
      "Analysis": "Negative",
      "Ended Reason": "Completed",
      "Transfer Destination": "Tech Solutions Inc.",
      "Recording": "/path/to/recording12.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Jessica",
      "Phone Number ID": "hi6vvo53kye",
      "Street": "4303 Herridge St",
      "City": "Houston",
      "Country": "United States",
      "Coordinates": "36.561166, -121.599831",
      "CP_Type": "TypeB",
      "Status": "Active",
      "Offer From": "Twitter",
      "Call Duration": "51 seconds",
      "Scoring": 6,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Emily",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "5hhw11ih6f",
      "Call ID": "j51pd9fdio",
      "Contact ID": "3rfmw564eql",
      "Org_ID": "1pknj4vgjv8",
      "Date and Time": "2025-01-18T12:57:25.311Z",
      "Call Type": "Inbound",
      "First Name": "Sarah",
      "Last Name": "Bob",
      "Email": "sarah.bob@gmail.com",
      "Phone Number": "(555) 351-7083",
      "Total Costs": "68.73",
      "Transport Model Voice VAPI Retell": "Model2",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Green Energy Corp.",
      "Recording": "/path/to/recording13.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent David",
      "Phone Number ID": "frnkw1mcyaa",
      "Street": "9211 Vinearbor St",
      "City": "Houston",
      "Country": "United States",
      "Coordinates": "33.859975, -118.05484",
      "CP_Type": "TypeB",
      "Status": "Active",
      "Offer From": "Trello",
      "Call Duration": "33 seconds",
      "Scoring": 6,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Jane",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "oeo9ka1uca",
      "Call ID": "5i4fxsc5ruo",
      "Contact ID": "ffl2hc5vwit",
      "Org_ID": "uu1onfn6wsr",
      "Date and Time": "2025-01-17T23:39:07.358Z",
      "Call Type": "Inbound",
      "First Name": "Jane",
      "Last Name": "Jessica",
      "Email": "jane.jessica@gmail.com",
      "Phone Number": "(555) 344-8569",
      "Total Costs": "26.55",
      "Transport Model Voice VAPI Retell": "Model4",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Smart Home Appliances",
      "Recording": "/path/to/recording14.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Tom",
      "Phone Number ID": "srb5c54wsan",
      "Street": "11155 Steeplepark Dr",
      "City": "Houston",
      "Country": "United States",
      "Coordinates": "36.560737, -119.007549",
      "CP_Type": "TypeA",
      "Status": "Active",
      "Offer From": "Weebly",
      "Call Duration": "31 seconds",
      "Scoring": 1,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Michael",
      "Successful Appointment Scheduling": "Yes"
    },
    {
      "FX Record ID": "47b0u9d6ad1",
      "Call ID": "uq6hdfs209s",
      "Contact ID": "lu2qfq0emv",
      "Org_ID": "lp7zt29bmvk",
      "Date and Time": "2025-01-17T23:32:08.410Z",
      "Call Type": "Inbound",
      "First Name": "David",
      "Last Name": "Tom",
      "Email": "david.tom@gmail.com",
      "Phone Number": "(555) 339-2832",
      "Total Costs": "0.10",
      "Transport Model Voice VAPI Retell": "Model2",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Global Marketing Group",
      "Recording": "/path/to/recording15.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Alice",
      "Phone Number ID": "echg8sqofjm",
      "Street": "868 Ringold St",
      "City": "Houston",
      "Country": "United States",
      "Coordinates": "33.794815, -117.908631",
      "CP_Type": "TypeA",
      "Status": "Active",
      "Offer From": "Dell",
      "Call Duration": "27 seconds",
      "Scoring": 4,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Bob",
      "Successful Appointment Scheduling": "Yes"
    },
    {
      "FX Record ID": "5n5tu3v5ozv",
      "Call ID": "7weu8le5i18",
      "Contact ID": "a4m87rmy9vu",
      "Org_ID": "gf8ib066r5j",
      "Date and Time": "2025-01-18T05:04:00.183Z",
      "Call Type": "Inbound",
      "First Name": "Emily",
      "Last Name": "Jessica",
      "Email": "emily.jessica@gmail.com",
      "Phone Number": "(555) 413-5054",
      "Total Costs": "43.65",
      "Transport Model Voice VAPI Retell": "Model5",
      "Analysis": "Negative",
      "Ended Reason": "Completed",
      "Transfer Destination": "Tech Solutions Inc.",
      "Recording": "/path/to/recording16.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent David",
      "Phone Number ID": "hk1lsq5ku0j",
      "Street": "1398 Valencia St",
      "City": "Los Angeles",
      "Country": "United States",
      "Coordinates": "33.779071, -117.998944",
      "CP_Type": "TypeC",
      "Status": "Active",
      "Offer From": "Basis Technologies",
      "Call Duration": "2 seconds",
      "Scoring": 10,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Michael",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "56ezur5onh2",
      "Call ID": "h32gd4fpxc",
      "Contact ID": "jr7wmfc3c8g",
      "Org_ID": "059rdl0zfyxa",
      "Date and Time": "2025-01-18T13:14:01.374Z",
      "Call Type": "Inbound",
      "First Name": "Jessica",
      "Last Name": "Tom",
      "Email": "jessica.tom@gmail.com",
      "Phone Number": "(555) 689-8912",
      "Total Costs": "73.32",
      "Transport Model Voice VAPI Retell": "Model2",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "NextGen Robotics",
      "Recording": "/path/to/recording17.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Sarah",
      "Phone Number ID": "y4qcas3lyn8",
      "Street": "725 Green St",
      "City": "San Francisco",
      "Country": "United States",
      "Coordinates": "33.622754, -117.780509",
      "CP_Type": "TypeC",
      "Status": "Active",
      "Offer From": "Salesforce",
      "Call Duration": "15 seconds",
      "Scoring": 6,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Tom",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "dctqrol7u9",
      "Call ID": "pjjagy03zb",
      "Contact ID": "9jifmd4nezn",
      "Org_ID": "x5psou2pqjc",
      "Date and Time": "2025-01-18T15:38:02.178Z",
      "Call Type": "Inbound",
      "First Name": "John",
      "Last Name": "Bob",
      "Email": "john.bob@gmail.com",
      "Phone Number": "(555) 711-7880",
      "Total Costs": "17.61",
      "Transport Model Voice VAPI Retell": "Model4",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Digital Media Agency",
      "Recording": "/path/to/recording18.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Alice",
      "Phone Number ID": "k7kfv4g8jo",
      "Street": "66 Ceres St",
      "City": "San Francisco",
      "Country": "United States",
      "Coordinates": "33.611223, -116.182817",
      "CP_Type": "TypeD",
      "Status": "Active",
      "Offer From": "Alibaba",
      "Call Duration": "22 seconds",
      "Scoring": 3,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Alice",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "1zgp6wmdf5l",
      "Call ID": "2tmclxdsmms",
      "Contact ID": "qobmk00vqaq",
      "Org_ID": "cplsy1efjt",
      "Date and Time": "2025-01-18T00:15:58.700Z",
      "Call Type": "Inbound",
      "First Name": "Jane",
      "Last Name": "Jessica",
      "Email": "jane.jessica@gmail.com",
      "Phone Number": "(555) 551-7669",
      "Total Costs": "89.68",
      "Transport Model Voice VAPI Retell": "Model4",
      "Analysis": "Negative",
      "Ended Reason": "Completed",
      "Transfer Destination": "NextGen Robotics",
      "Recording": "/path/to/recording19.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Jessica",
      "Phone Number ID": "555jzehck4v",
      "Street": "9241 13th Ave SW",
      "City": "Seattle",
      "Country": "United States",
      "Coordinates": "34.143697, -118.320791",
      "CP_Type": "TypeC",
      "Status": "Active",
      "Offer From": "Asana",
      "Call Duration": "40 seconds",
      "Scoring": 8,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Emily",
      "Successful Appointment Scheduling": "No"
    },
    {
      "FX Record ID": "volc3hwa8a",
      "Call ID": "xjehdjxrd6e",
      "Contact ID": "9bs29cjafbq",
      "Org_ID": "0ngmpcgavhi",
      "Date and Time": "2025-01-18T10:17:29.024Z",
      "Call Type": "Inbound",
      "First Name": "Sarah",
      "Last Name": "Sarah",
      "Email": "sarah.sarah@gmail.com",
      "Phone Number": "(555) 538-9182",
      "Total Costs": "3.32",
      "Transport Model Voice VAPI Retell": "Model3",
      "Analysis": "Negative",
      "Ended Reason": "Completed",
      "Transfer Destination": "Food and Beverage Enterprises",
      "Recording": "/path/to/recording20.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Sarah",
      "Phone Number ID": "ky66d4y5rv",
      "Street": "9668 Rainier Ave S",
      "City": "Seattle",
      "Country": "United States",
      "Coordinates": "33.997172, -118.312664",
      "CP_Type": "TypeC",
      "Status": "Active",
      "Offer From": "Okta",
      "Call Duration": "4 seconds",
      "Scoring": 3,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "No",
      "Scheduled Appointment with": "Person Michael",
      "Successful Appointment Scheduling": "Yes"
    },
    {
      "FX Record ID": "5bt0h5yrjmx",
      "Call ID": "lr3q9e6m2on",
      "Contact ID": "7d0p4wykr4x",
      "Org_ID": "ae2f6dzxhz6",
      "Date and Time": "2025-01-18T15:20:22.951Z",
      "Call Type": "Inbound",
      "First Name": "Sarah",
      "Last Name": "Jane",
      "Email": "sarah.jane@gmail.com",
      "Phone Number": "(555) 741-2975",
      "Total Costs": "7.99",
      "Transport Model Voice VAPI Retell": "Model2",
      "Analysis": "Positive",
      "Ended Reason": "Completed",
      "Transfer Destination": "Travel and Leisure Agency",
      "Recording": "/path/to/recording21.mp3",
      "Transcript": "This is a sample transcript of the call.",
      "Agents Name": "Agent Michael",
      "Phone Number ID": "5bhazen4osa",
      "Street": "9679 46th Ave SW",
      "City": "Seattle",
      "Country": "United States",
      "Coordinates": "37.654947, -121.761907",
      "CP_Type": "TypeA",
      "Status": "Active",
      "Offer From": "Freshworks",
      "Call Duration": "15 seconds",
      "Scoring": 8,
      "Reasons": "Customer requested a follow-up.",
      "Follow Up": "Yes",
      "Scheduled Appointment with": "Person Michael",
      "Successful Appointment Scheduling": "No"
    }
] 

// Constants
let map = null;
let currentMarker = null;

// DOM Elements
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const loadingAnimation = document.getElementById('loadingAnimation');
const messagesDiv = document.getElementById('messages');
const currentLocation = document.getElementById('currentLocation');

// Global variables
let peerConnection = null;
let dataChannel = null;
let mediaStream = null;
let audioElement = null;
let populationChart = null;
let climateChart = null;

// Custom icons
const customIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
        background-color: #FF1744;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 15px rgba(255,23,68,0.5);
    "></div>`,
    iconSize: [15, 15],
    iconAnchor: [7, 7]
});

// Initialize map
function initMap() {
    // Create map
    map = L.map('map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1.0
    });

    // Define base map layers
    const mapLayers = {
        'Colorful Light': L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }),
        'Vibrant Dark': L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }),
        'Midnight': L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }),
        'Clean Light': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }),
        'Street Map': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abc',
            maxZoom: 19
        })
    };

    // Add default layer
    mapLayers['Colorful Light'].addTo(map);

    // Add layer control
    L.control.layers(mapLayers, null, {
        position: 'topright',
        collapsed: false
    }).addTo(map);

    // Add event listeners
    map.on('load', () => {
        addMessage('Map loaded successfully');
    });
}

// Function to navigate to a location based on mockupData
async function navigateToLocation(locationName) {
    console.log("locationName", locationName);
    try {
        // Filter mockupData based on city or address match
        const matchingLocations = mockupData.filter(data => {
            const searchTerm = locationName.toLowerCase();
            return data.City.toLowerCase().includes(searchTerm) ||
                   data.Street.toLowerCase().includes(searchTerm) ||
                   data.Country.toLowerCase().includes(searchTerm);
        });

        if (matchingLocations.length === 0) {
            throw new Error(`No matching locations found for "${locationName}"`);
        }

        // Clear existing markers
        if (currentMarker) {
            map.removeLayer(currentMarker);
        }

        // Add markers for all matching locations
        matchingLocations.forEach(location => {
            const [lat, lng] = location.Coordinates.split(', ').map(Number);
            
            // Calculate distances between this location and other points
            const distances = mockupData.map(other => {
                const [otherLat, otherLng] = other.Coordinates.split(', ').map(Number);
                return {
                    location: other,
                    distance: calculateDistance(lat, lng, otherLat, otherLng)
                };
            }).filter(d => d.distance < 50); // Show only locations within 50km

            // Create marker with enhanced popup content
            const marker = L.marker([lat, lng], {icon: customIcon})
                .bindPopup(`
                    <div class="p-3">
                        <h3 class="font-bold text-lg">${location.City}, ${location.Country}</h3>
                        <p class="text-sm mt-2">Address: ${location.Street}</p>
                        <p class="text-sm">Coordinates: ${location.Coordinates}</p>
                        <p class="text-sm">Agent: ${location["Agents Name"]}</p>
                        <p class="text-sm">Call Duration: ${location["Call Duration"]}</p>
                        <p class="text-sm">Status: ${location.Status}</p>
                        <div class="mt-2 pt-2 border-t">
                            <p class="font-semibold">Nearby Locations:</p>
                            ${distances.slice(1, 4).map(d => `
                                <p class="text-xs">
                                    ${d.location.City} (${d.distance.toFixed(2)} km)
                                </p>
                            `).join('')}
                        </div>
                    </div>
                `)
                .addTo(map);

            // Store the first marker as current
            if (!currentMarker) {
                currentMarker = marker;
            }
        });

        // Calculate the bounds to fit all markers
        const bounds = L.latLngBounds(matchingLocations.map(loc => {
            const [lat, lng] = loc.Coordinates.split(', ').map(Number);
            return [lat, lng];
        }));

        // Fly to the bounds with animation
        map.flyToBounds(bounds, {
            padding: [50, 50],
            duration: 2,
            easeLinearity: 0.25
        });

        // Open first marker's popup
        currentMarker.openPopup();

        // Update UI
        const mainLocation = matchingLocations[0];
        currentLocation.textContent = `Current: ${mainLocation.City}, ${mainLocation.Country}`;
        addMessage(`Found ${matchingLocations.length} locations matching "${locationName}"`);

        return {
            success: true,
            location: locationName,
            matches: matchingLocations.length,
            mainLocation: {
                city: mainLocation.City,
                country: mainLocation.Country,
                coordinates: mainLocation.Coordinates
            }
        };
    } catch (error) {
        addMessage(`Failed to navigate to "${locationName}": ${error.message}`, 'error');
        return { success: false, error: error.message };
    }
}

// Helper function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function toRad(degrees) {
    return degrees * (Math.PI/180);
}

function updateLocationStats(stats) {
    const cityStats = document.getElementById('cityStats');
    const cityStatsTitle = document.getElementById('cityStatsTitle');
    const keyFacts = document.getElementById('keyFacts');

    // Show the stats container
    cityStats.classList.remove('hidden');
    cityStatsTitle.textContent = `${stats.cityName} Statistics`;

    // Update key facts
    keyFacts.innerHTML = stats.keyFacts.map(fact => 
        `<div class="fact p-2 bg-base-200 rounded">${fact}</div>`
    ).join('');

    // Update population chart
    if (populationChart) {
        populationChart.destroy();
    }
    const popCtx = document.getElementById('populationChart').getContext('2d');
    populationChart = new Chart(popCtx, {
        type: 'line',
        data: {
            labels: stats.populationYears,
            datasets: [{
                label: 'Population',
                data: stats.populationData,
                borderColor: '#4CAF50',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => `${(value / 1000000).toFixed(1)}M`
                    }
                }
            }
        }
    });

    // Update climate chart
    if (climateChart) {
        climateChart.destroy();
    }
    const climateCtx = document.getElementById('climateChart').getContext('2d');
    climateChart = new Chart(climateCtx, {
        type: 'bar',
        data: {
            labels: stats.climateMonths,
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: stats.temperatureData,
                    borderColor: '#FF9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.5)',
                    yAxisID: 'y'
                },
                {
                    label: 'Rainfall (mm)',
                    data: stats.rainfallData,
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.5)',
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Temperature (°C)'
                    }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Rainfall (mm)'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}

// Helper functions
function updateStatus(status, isConnected = false) {
    statusText.textContent = status;
    statusIndicator.className = `w-3 h-3 rounded-full ${isConnected ? 'bg-success' : 'bg-error'}`;
}

function addMessage(text, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `my-2 p-2 rounded ${type === 'error' ? 'bg-error text-error-content' : 'bg-info text-info-content'}`;
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function showLoading(show) {
    loadingAnimation.className = show ? 'mt-4' : 'hidden mt-4';
    startButton.disabled = show;
}

// WebRTC implementation
async function initializeWebRTC() {
    try {
        showLoading(true);
        updateStatus('Initializing...');

        // Get ephemeral token
        const tokenResponse = await fetch('/session');
        const data = await tokenResponse.json();
        
        if (!data.client_secret?.value) {
            throw new Error('Failed to get ephemeral token');
        }

        const EPHEMERAL_KEY = data.client_secret.value;

        // Create peer connection
        peerConnection = new RTCPeerConnection();

        // Set up audio element
        audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        peerConnection.ontrack = e => audioElement.srcObject = e.streams[0];

        // Add local audio track
        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        peerConnection.addTrack(mediaStream.getTracks()[0]);

        // Set up data channel
        dataChannel = peerConnection.createDataChannel('oai-events');
        dataChannel.addEventListener('message', handleDataChannelMessage);
        dataChannel.addEventListener('open', () => {
            updateStatus('Connected', true);
            stopButton.disabled = false;
            startButton.disabled = true;
            addMessage('Connection established');
            configureTools();
        });

        // Create and set local description
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        // Connect to OpenAI Realtime API
        const baseUrl = 'https://api.openai.com/v1/realtime';
        const model = 'gpt-4o-realtime-preview-2024-12-17';
        const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
            method: 'POST',
            body: offer.sdp,
            headers: {
                Authorization: `Bearer ${EPHEMERAL_KEY}`,
                'Content-Type': 'application/sdp'
            },
        });

        if (!sdpResponse.ok) {
            throw new Error('Failed to connect to OpenAI Realtime API');
        }

        const answer = {
            type: 'answer',
            sdp: await sdpResponse.text(),
        };
        await peerConnection.setRemoteDescription(answer);

        showLoading(false);
    } catch (error) {
        console.error('Error:', error);
        showLoading(false);
        updateStatus('Error: ' + error.message);
        addMessage(error.message, 'error');
    }
}

// Function to adjust zoom level
async function adjustZoom(zoomIn = true, amount = 1) {
    try {
        const currentZoom = map.getZoom();
        const newZoom = zoomIn ? currentZoom + amount : currentZoom - amount;
        const boundedZoom = Math.min(Math.max(newZoom, map.getMinZoom()), map.getMaxZoom());
        
        // Get current center
        const center = map.getCenter();
        
        // Find nearby locations based on zoom level
        const searchRadius = Math.pow(2, 16 - boundedZoom); // Radius decreases as zoom increases
        const nearbyLocations = mockupData.filter(location => {
            const [lat, lng] = location.Coordinates.split(', ').map(Number);
            const distance = calculateDistance(center.lat, center.lng, lat, lng);
            return distance <= searchRadius;
        });

        // Update markers with animation
        nearbyLocations.forEach(location => {
            const [lat, lng] = location.Coordinates.split(', ').map(Number);
            if (!map.hasLayer(currentMarker) || !currentMarker.getLatLng().equals([lat, lng])) {
                const marker = L.marker([lat, lng], {icon: customIcon})
                    .bindPopup(`
                        <div class="p-3">
                            <h3 class="font-bold">${location.City}, ${location.Country}</h3>
                            <p class="text-sm">Address: ${location.Street}</p>
                            <p class="text-sm">Coordinates: ${location.Coordinates}</p>
                            <p class="text-sm">Distance from center: ${calculateDistance(
                                center.lat, center.lng, lat, lng
                            ).toFixed(2)} km</p>
                        </div>
                    `);
                
                // Add marker with animation
                marker.addTo(map);
                anime({
                    targets: marker._icon,
                    opacity: [0, 1],
                    scale: [0.5, 1],
                    duration: 500,
                    easing: 'easeOutElastic(1, .8)'
                });
            }
        });

        map.setZoom(boundedZoom, {
            animate: true,
            duration: 1
        });
        
        addMessage(`Zoomed ${zoomIn ? 'in' : 'out'} to level ${boundedZoom} (${nearbyLocations.length} locations visible)`);
        return { success: true, newZoom: boundedZoom, visibleLocations: nearbyLocations.length };
    } catch (error) {
        addMessage(`Failed to adjust zoom: ${error.message}`, 'error');
        return { success: false, error: error.message };
    }
}

// Function to pan the map in a direction
async function panMap(direction, amount = 100) {
    try {
        const center = map.getCenter();
        let newLat = center.lat;
        let newLng = center.lng;
        
        // Calculate zoom-adjusted movement amount
        // At max zoom (19), movement should be smallest
        // At min zoom (2), movement should be largest
        const currentZoom = map.getZoom();
        const maxZoom = map.getMaxZoom();
        const minZoom = map.getMinZoom();
        
        // Calculate zoom factor (1 at max zoom, increasing as zoom decreases)
        const zoomFactor = Math.pow(2, maxZoom - currentZoom);
        
        // Base movement in degrees (smaller for finer control)
        const baseMovement = 0.0001 * amount;
        
        // Apply zoom-adjusted movement
        const adjustedMovement = baseMovement * zoomFactor;
        
        // Calculate new center based on direction
        switch (direction.toLowerCase()) {
            case 'north':
                newLat += adjustedMovement;
                break;
            case 'south':
                newLat -= adjustedMovement;
                break;
            case 'east':
                newLng += adjustedMovement;
                break;
            case 'west':
                newLng -= adjustedMovement;
                break;
            default:
                throw new Error('Invalid direction. Use north, south, east, or west.');
        }
        
        // Pan to new position
        map.panTo([newLat, newLng], {
            animate: true,
            duration: 1  // 1 second animation
        });
        
        addMessage(`Panned ${direction} (zoom level: ${currentZoom})`);
        return { 
            success: true, 
            direction, 
            newCenter: { lat: newLat, lng: newLng },
            zoomLevel: currentZoom,
            movement: adjustedMovement
        };
    } catch (error) {
        addMessage(`Failed to pan map: ${error.message}`, 'error');
        return { success: false, error: error.message };
    }
}

function configureTools() {
    const event = {
        type: 'session.update',
        session: {
            modalities: ['text', 'audio'],
            tools: [
                {
                    type: 'function',
                    name: 'navigateToLocation',
                    description: 'Navigate the map to any location in the world, including specific neighborhoods, addresses, or landmarks.',
                    parameters: {
                        type: 'object',
                        properties: {
                            locationName: {
                                type: 'string',
                                description: 'The name of any location, address, or landmark to navigate to'
                            }
                        },
                        required: ['locationName']
                    }
                },
                {
                    type: 'function',
                    name: 'adjustZoom',
                    description: 'Zoom in or out on the map by a specified amount.',
                    parameters: {
                        type: 'object',
                        properties: {
                            zoomIn: {
                                type: 'boolean',
                                description: 'True to zoom in, false to zoom out'
                            },
                            amount: {
                                type: 'number',
                                description: 'Amount to zoom by (default is 1)',
                                minimum: 0.1,
                                maximum: 3
                            }
                        },
                        required: ['zoomIn']
                    }
                },
                {
                    type: 'function',
                    name: 'panMap',
                    description: 'Pan the map in a specified direction.',
                    parameters: {
                        type: 'object',
                        properties: {
                            direction: {
                                type: 'string',
                                description: 'Direction to pan (north, south, east, or west)',
                                enum: ['north', 'south', 'east', 'west']
                            },
                            amount: {
                                type: 'number',
                                description: 'Amount to pan in pixels (default is 100)',
                                minimum: 50,
                                maximum: 500
                            }
                        },
                        required: ['direction']
                    }
                },
                {
                    type: 'function',
                    name: 'provideLocationStats',
                    description: 'Provide detailed statistics and information about a location.',
                    parameters: {
                        type: 'object',
                        properties: {
                            cityName: {
                                type: 'string',
                                description: 'The name of the location to provide statistics for'
                            },
                            population: {
                                type: 'object',
                                properties: {
                                    years: {
                                        type: 'array',
                                        items: { type: 'string' }
                                    },
                                    data: {
                                        type: 'array',
                                        items: { type: 'number' }
                                    }
                                },
                                required: ['years', 'data']
                            },
                            climate: {
                                type: 'object',
                                properties: {
                                    months: {
                                        type: 'array',
                                        items: { type: 'string' }
                                    },
                                    temperature: {
                                        type: 'array',
                                        items: { type: 'number' }
                                    },
                                    rainfall: {
                                        type: 'array',
                                        items: { type: 'number' }
                                    }
                                },
                                required: ['months', 'temperature', 'rainfall']
                            },
                            keyFacts: {
                                type: 'array',
                                items: { type: 'string' }
                            }
                        },
                        required: ['cityName', 'population', 'climate', 'keyFacts']
                    }
                }
            ]
        }
    };
    dataChannel.send(JSON.stringify(event));
}

function handleDataChannelMessage(event) {
    try {
        const msg = JSON.parse(event.data);
        
        // Handle function calls
        if (msg.type === 'response.function_call_arguments.done') {
            if (msg.name === 'navigateToLocation') {
                const args = JSON.parse(msg.arguments);
                navigateToLocation(args.locationName).then(result => {
                    const responseEvent = {
                        type: 'conversation.item.create',
                        item: {
                            type: 'function_call_output',
                            call_id: msg.call_id,
                            output: JSON.stringify(result)
                        }
                    };
                    dataChannel.send(JSON.stringify(responseEvent));
                });
            } 
            else if (msg.name === 'adjustZoom') {
                const args = JSON.parse(msg.arguments);
                adjustZoom(args.zoomIn, args.amount || 1).then(result => {
                    const responseEvent = {
                        type: 'conversation.item.create',
                        item: {
                            type: 'function_call_output',
                            call_id: msg.call_id,
                            output: JSON.stringify(result)
                        }
                    };
                    dataChannel.send(JSON.stringify(responseEvent));
                });
            }
            else if (msg.name === 'panMap') {
                const args = JSON.parse(msg.arguments);
                panMap(args.direction, args.amount || 100).then(result => {
                    const responseEvent = {
                        type: 'conversation.item.create',
                        item: {
                            type: 'function_call_output',
                            call_id: msg.call_id,
                            output: JSON.stringify(result)
                        }
                    };
                    dataChannel.send(JSON.stringify(responseEvent));
                });
            }
            else if (msg.name === 'provideLocationStats') {
                const args = JSON.parse(msg.arguments);
                updateLocationStats({
                    cityName: args.cityName,
                    keyFacts: args.keyFacts,
                    populationYears: args.population.years,
                    populationData: args.population.data,
                    climateMonths: args.climate.months,
                    temperatureData: args.climate.temperature,
                    rainfallData: args.climate.rainfall
                });
                
                const responseEvent = {
                    type: 'conversation.item.create',
                    item: {
                        type: 'function_call_output',
                        call_id: msg.call_id,
                        output: JSON.stringify({ success: true })
                    }
                };
                dataChannel.send(JSON.stringify(responseEvent));
            }
        }
        
        // Log all messages for debugging
        addMessage(`Event: ${JSON.stringify(msg, null, 2)}`);
    } catch (error) {
        console.error('Error parsing message:', error);
        addMessage(`Error parsing message: ${error.message}`, 'error');
    }
}

function cleanup() {
    try {
        // Stop all media tracks
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => {
                track.stop();
            });
            mediaStream = null;
        }

        // Clean up audio element
        if (audioElement) {
            audioElement.srcObject = null;
            audioElement.remove();
            audioElement = null;
        }

        // Remove marker
        if (currentMarker) {
            map.removeLayer(currentMarker);
            currentMarker = null;
        }

        // Close data channel
        if (dataChannel) {
            dataChannel.close();
            dataChannel = null;
        }

        // Close peer connection
        if (peerConnection) {
            peerConnection.close();
            peerConnection = null;
        }

        updateStatus('Disconnected');
        startButton.disabled = false;
        stopButton.disabled = true;
        addMessage('Connection closed and resources cleaned up');
    } catch (error) {
        console.error('Error during cleanup:', error);
        addMessage(`Error during cleanup: ${error.message}`, 'error');
    }
}

// Event listeners
startButton.addEventListener('click', initializeWebRTC);
stopButton.addEventListener('click', cleanup);

// Initial setup
updateStatus('Disconnected');
addMessage('Ready to connect');
initMap();

// Add some nice animations
anime({
    targets: '.card',
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutElastic(1, .8)'
}); 
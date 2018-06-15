define({"199":{i:0.000202168016715395,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_Requirements.html",a:"Requirements In addition to .NET Framework 3.5, the latest version of EMS (EMS Desktop Client V44.1) must be installed.  ",t:"System Requirements"},"200":{i:0.000202168016715395,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_IntegrationDiagram.htm",a:"Polycom Integration Diagram",t:"Polycom Integration Diagram"},"201":{i:0.000227652826484076,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_ObtainInstallFiles.html",a:"Obtain the Installation Files In addition to the EMS license key (available from the  EMS Customer Portal ), please contact Customer Support (or a member of the Professional Services group if you are working with one) to obtain the following components: PolycomOverlay.sql: SQL script that will need ...",t:"Obtain the Polycom Integration Installation Files"},"202":{i:0.000227652826484076,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_InstallPolycomServiceFirstTime.html",a:"Locate the PolycomOverlay.sql file. Open Microsoft SQL Server Management Studio. Within Microsoft SQL Server Management Studio, select File \u003e Open \u003e File… and locate PolycomOverlay.sql. Select your EMS database and execute the query (Query \u003e Execute). When query execution has completed, a ...",t:"Install the EMS Polycom Service for the First Time"},"203":{i:0.000227652826484076,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_InstallUpgradePolycomService.html",a:"Manually uninstall any existing versions of the EMS Polycom Service. Load the PolycomServiceSetup.msi file onto the server that will be running the service. This can be your existing EMS database server or EMS Web App web server. Run PolycomServiceSetup.msi. The first screen welcomes you to the EMS ...",t:"Install or Upgrade the EMS Polycom Service"},"204":{i:0.0015175231488473,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_ConfigPolycomInterface.htm",a:"This topic provides information on the following:  Set Preferences in EMS Polycom Interface Set Preferences in Polycom Activity Area Set Preferences in EMS Polycom Interface Within the Windows Start menu, locate EMS Polycom Settings. The EMS Polycom Settings screen presents. Enter your EMS MS SQL ...",t:"Configure the EMS Polycom Interface"},"205":{i:0.000227652826484076,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_InstallPolycomActivityDLL.html",a:"On each client machine that needs to access the Polycom Activity area, paste a copy of the EMS.PolycomActivity.dll file into the folder that contains your EMS application files (typically C:\\Program Files\\EMS). Once the EMS.PolycomActivity.dll is placed in the correct folder on the user\u0027s machine, ...",t:"Install the Polycom Activity DLL on Users\u0027 Machines"},"206":{i:0.000227652826484076,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_ConfigurePolycomRoomsResources.html",a:"Before activating the EMS Polycom Interface, the EMS video conference room and/or resource list must be synchronized with a Polycom RealPresence Resource Manager (e.g. room or resource).Systems are linked via the EMS Room/Resource External Reference field and the UserID in Polycom. Rooms can be ...",t:"Configure the EMS Polycom Rooms/Resources"},"207":{i:0.000732734992937441,u:"../Content/OptionalFeatures/Polycom/A_V44.1/Polycom_AdvancedPolycomInterfaceConfig.html",a:"Advanced EMS Polycom Interface Configuration By default, the following booking information is transferred from EMS to the Polycom Realpresence Resource Manager API:  ",t:"Advanced EMS Polycom Interface Configuration"},"208":{i:0.000239855171452386,u:"../Content/ServicesComponents/Introduction to Services and Components.htm",a:"This section discusses additional services and components offered by EMS Software. These include: EMS Automated Report Service  EMS Email Notification Service—This optional service notifies users via email of changes in the database.  EMS Check-in Notification Service—This service automates the ...",t:"Services and Components"},"209":{i:0.000212521198966821,u:"../Content/ServicesComponents/EMS Automated Report Service.htm",a:"EMS has built-in functionality that will automatically email reports to users. To learn more about configuring automated reporting, see  Configure Automated Reports .  Note: The EMS Automated Report Service must be installed on a computer that is connected to the network and is running 24 hours a ...",t:"Install the EMS Automated Report Service"},"210":{i:0.000212521198966821,u:"../Content/ServicesComponents/EMS Check in Notification.htm",a:"To install the EMS Email Notification Service: Verify that the prerequisite software is installed. Download the EMSCheckInNotificationSetup.msi onto the server that will be running the service. Double-click EMSCheckInNotificationSetup.msi. Follow the on-screen prompts. It is recommended that the ...",t:"Install the EMS Check-in Notification Service"},"211":{i:0.000426010681841025,u:"../Content/ServicesComponents/InstallUpgradeEMSEmailNotificationSvc.htm",a:"EMS has built-in functionality that alerts users of certain changes in the database.  With the optional EMS Email Notification Service users can also be notified via email. If email notification will not be used, there is no need to install the Email Notification Service. Standard notifications can ...",t:"Install or Upgrade the EMS Email Notification Service"},"212":{i:0.000426010681841025,u:"../Content/ServicesComponents/InstallUpgrade EMS Campus Auto Sync Service.htm",a:"Functionality exists within EMS Campus that allows Domain Schedulers to manually process post-publish course changes made in your SIS to EMS. The EMS Campus Auto Sync Service automates this process. The EMS Campus Auto Sync Service must be installed on a computer/server that is connected to the ...",t:"Install or Upgrade the EMS Campus Auto Sync Service (EMS Campus Only)"},"213":{i:0.000202168016715395,u:"../Content/SystemRequirements_Home.htm",a:"System Requirements for EMS Software This section provides a detailed description of the requirements for EMS software ( V44.1 ,  V44 ,   V43 , and  EMS Lite 8 ), including system constraints, interface and interactions with other third-party applications. ",t:"System Requirements for EMS Software"},"214":{i:0.00331217106250789,u:"../Content/EMS_SystemReq_44.1.html",a:"Note:  To view best practices for setting up your SQL server, refer to  EMS Best Practices for SQL Server . *Requires an update to Windows Management Framework to version 3. **= varies per EMS Software Application EMS Web App *= varies per application Tip:EMS Web App V44.1 has been optimized for ...",t:"EMS V44.1 System Requirements"},"215":{i:0.000431580015961935,u:"../Content/EMS_SystemReq_44.htm",a:"Database Server Web Server EMS Desktop Client  VIRTUAL EMS (VEMS) VEMS (Mobile) EMS Mobile App EMS for Outlook \tEMS Platform Services EMS Integration for Exchange EMS Desktop Client EMS Kiosk EMS Glance EMS Services Master Calendar V8.0 Services Master Calendar V7.0 Services \tRegics Services",t:"System \u0026 Hardware Requirements V44"},"216":{i:0.000563572818674789,u:"../Content/EMS_SystemReq_43.htm",a:"EMS V43 System Requirements                      ",t:"EMS V43 System Requirements"},"217":{i:0.000245129039860271,u:"../Content/EMSLite8SystemRequirements.htm",a:"EMS Lite 8 System Requirements   Note: These are the minimum system requirements for the optional web component, Virtual EMS (VEMS).  ",t:"EMS Lite 8 System Requirements"},"218":{i:0.00134764731471578,u:"../Content/EMSRoomSignApp/A_44.1/A_Installation/RSA_IG_Authentication.htm",a:"This section provides the following information about configuring EMS Room Sign App Authentication:  Group Identification/Authentication Settings Secondary Authentication Group Identification/Authentication Settings Secondary Authentication Users who cannot authenticate due to a lost or forgotten ...",t:"Configure Authentication Settings for the EMS Room Sign App"},"219":{i:0.00035159891886385,u:"../Content/EMSRoomSignApp/A_44.1/A_Installation/RSA_IG_DeployRSAAppliances.htm",a:"The EMS Room Sign App supports integration with multiple appliances, including the  Aura Meeting Room Screen, Multiple-Input Multiple-Output (MIMO) , and  Iadea  technologies.  Aura Meeting Room Screen for the EMS Room Sign App The Aura Meeting Room Screen from ResourceXpress is an interactive ...",t:"Deploying the EMS Room Sign App on Appliances"},"220":{i:0.000202168016715395,u:"../Content/EMSRoomSignApp/Video Tutorials/RSA_VIDEO-IntroRSA.htm",a:"Overview of EMS Room Sign App",t:"Overview of EMS Room Sign App"},"221":{i:0.000374012109294899,u:"../Content/EMSMasterCalendar/V8/A_Installation/ExecuteDataConnectorScript.htm",a:"In order to use the EMS Master Calendar Data Connectors, an organization must be properly licensed.  If unsure about whether the EMS Data Connector Module, that allows importing from the current EMS Database, has been purchased; Log into the EMS Master Calendar site, go to the systemcheck.aspx page, ...",t:"Execute the EMS Master Calendar Data Connector Script"},"222":{i:0.000202168016715395,u:"../Content/EMSMasterCalendar/V8/A_Installation/InstallorUpgradeDataConnectorService.htm",a:"Prior to installing or upgrading the EMS Master Calendar Data Connector Service, be sure the EMS Data Connector Script has been executed against the EMS Database(s).  (See  Executing the EMS Data Connector Script .) The optional Data Connector Service for the EMS Master Calendar System can be used ...",t:"Install or Upgrade EMS Data Connector Service"},"223":{i:0.000202168016715395,u:"../Content/EMSMasterCalendar/V8/A_Installation/InstallingUpgradingtheImportService.htm",a:"If using a data connector to import a tab delimited and/or XML file, one must set the temporary location, and SMTP server information when setting up the data connecter service.  This allows for the importing of the file and also the generating of an email to notify the individual, who defined the ...",t:"Install or Upgrade the EMS Master Calendar Import Service"},"224":{i:0.000202168016715395,u:"../Content/EMSMasterCalendar/V8/A_Installation/StartingMasterCalendar.htm",a:"After following the installation instructions, verify the EMS Master Calendar installation by opening a new web browser and entering the EMS Master Calendar address:     http://[ServerName]/ MasterCalendar/   (replace [ServerName] with the name of the web server) The first time EMS Master Calendar ...",t:"Launch EMS Master Calendar"},"225":{i:0.000202168016715395,u:"../Content/ConfigGuides/1_ConfigurationHome/1_Configuration Home.htm",a:"Configuration Guides These guides provides instructions to IT and System Administrators for configuring EMS Software products. ",t:"Configuration Guides"},"226":{i:0.00176934641731322,u:"../Content/ConfigGuides/2_EMS_Desktop_Client_CG.htm",a:"EMS is user-friendly room scheduling software designed to manage the meetings and events that take place in your facility. Standard features, which you use to create, manage, and report on events, include the following: The Reservation Wizard room booking tool A graphical Reservation Book The ...",t:"EMS Desktop Client Configuration Guide"},"227":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_StartingEMS.html",a:"After EMS has been installed on your desktop, a shortcut icon for the application is placed on your desktop. An option for the application is also available from your Start menu. You can double-click the desktop icon to launch the EMS application, or you can select the option from your Start menu. ...",t:"Starting EMS"},"228":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_OverviewofDCConfig.htm",a:"This guide leads you through all aspects of configuring EMS under the assumption that you have installed the application and have Administrator access. For training in initial setup and configuration, please contact EMS Professional Services. Titles of many sections in this Guide refer to menu ...",t:"Overview of EMS Desktop Client Configuration"},"229":{i:0.00039171971129128,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_AuthenticationOptions.html",a:"Authentication is controlled by three factors.  They all must be configured correctly for the authentication to work: Login Credentials: This is the location where external LDAP/Windows/Portal credentials need to be entered in our software for each user. Enabled by: This is either a parameter or ...",t:"Authentication Options for EMS Desktop Client"},"230":{i:0.00134764731471578,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_EMSMainWindow.html",a:"The EMS main window is your starting point for the EMS application. The window provides quick access to all the EMS functions (Reservations, Reports, Configuration, and so on) and system tools. The EMS main window has three major components: Menu Bar Toolbar Main Menu EMS Main Window Menu Bar The ...",t:"The EMS Main Window"},"231":{i:0.0109523516869873,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_EMSBrowserWindow.htm",a:"Many EMS functional areas use a Browser window. For example, the Groups window, the Query Builder window, and the Service Order Management window are all EMS Browser windows. You use an EMS Browser window to search for data, add new data, and edit and/or delete existing data. For example, in the ...",t:"The EMS Browser Window"},"232":{i:0.00035159891886385,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_OverviewConfigRooms.html",a:"A room is a physical location that you reserve for an event. You can configure any physical location or space (e.g., meeting room, athletic field, lobby, etc.), as a room. Examples of rooms: Grand Ballroom Conference Room A Harris Hall Room 200 South Soccer Field EMS uses three classifications of ...",t:"Overview of Configuring Rooms"},"233":{i:0.00154796823931014,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigRooms.html",a:"By defining rooms in your organization, you enable Everyday Users to choose from a list of rooms that they can intuitively filter by many elements, such as name, location, type, setup, available services, and physical features. Tip: The Room Configuration Wizard is ideal for configuring multiple ...",t:"Configuring Rooms"},"234":{i:0.00201545811659452,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_RoomConfigWiz.htm",a:"The Room Configuration Wizard enables you to configure multiple rooms at one time. These rooms should have the following properties in common: Room type Setup hours Teardown hours Features Setup types This topic provides information on the following: Using the Room Configuration Wizard Configure ...",t:"Room Configuration Wizard"},"235":{i:0.000302362249834259,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigRoomPricing.htm",a:"You can configure the pricing for a room on the Pricing tab of the Room dialog box, or you can configure the room, and then configure the pricing for it at a later date on the Edit Pricing window. Tip: You can also configure the room price at the time that you are configuring the room on the Room ...",t:"Configure Room Pricing"},"236":{i:0.00158398487367327,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigOverrideRooms.htm",a:"An override room is used in EMS to loosely define useable space which is not formally configured. For example, a building may have private offices which are not configured as spaces available for public use, but you may need to select such a space for an attendee who is participating remotely in a ...",t:"Configure Override Rooms"},"237":{i:0.00117650007167928,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigGenerRoomQRCode.htm",a:"In order to associate rooms with QR Codes (in EMS Desktop Client), you will:  Enable Room Cards for Rooms  Run the Room Card - QR Code Report to Generate QR Codes  This automatically generates the codes and associates them with the designated rooms. Enable Room Cards for Rooms  Open the room ...",t:"Configure and Generate Room QR Codes"},"238":{i:0.000485008875475771,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ImportRooms.htm",a:"You can import rooms from a tab-delimited file into a building, area, or view that you select. (See Also:  Room Import File Specifications ). After you import rooms, you must edit the configuration (setup type, features, images, and so on) for each room. On the EMS menu bar, click Configuration \u003e ...",t:"Import Rooms"},"239":{i:0.00332165422980669,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigBuilding.html",a:"A building is a physical location that contains one or more spaces (e.g., rooms, open areas, etc.), that users can reserve for an event. Buildings are one of the core data items that you must configure so that your users can make reservations in EMS. This topic will provide the following ...",t:"Configuring Buildings"},"240":{i:0.0005923524021972,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigBuildingHours.html",a:"By configuring building hours, you can set times when buildings and rooms therein are not available for scheduling.  In the EMS Desktop Client, configured building hours do not prevent a user from scheduling events outside these hours. A user is merely warned that the event is being scheduled ...",t:"Configuring Building Hours"},"241":{i:0.000890738034479042,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_BuildHourWiz.htm",a:"The Building Hours Wizard streamlines the configuration process and allows users to configure building hours for multiple dates. On the EMS Desktop Client menu bar, click Configuration \u003e Facilities \u003e Building Hours. The Building Hours window opens. This window lists all the buildings and their ...",t:"Building Hours Wizard"},"242":{i:0.000945718803058242,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigAreas.html",a:"Configure Areas An area is a particular region of indefinite boundary that is used to group buildings, for example, Southeast Region, Campus Wide, Training Sites, and so on. You can use an area as search criteria in EMS and EMS Web App, in reporting, and so on. When you configure an area, you must ...",t:"Configuring Areas"},"243":{i:0.0011318000240729,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigRoomType.html",a:"Configure Room Types A room type is the class or category of the room (e.g., a meeting room, an auditorium, a workspace, a multi-purpose room, etc.). Users can use room types to filter search results. On the EMS Desktop Client menu bar, click Configuration \u003e Facilities \u003e Room Types. The Room Types ...",t:"Configuring Room Types"},"244":{i:0.00052888257856689,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigSetupType.html",a:"Configure Setup Types A setup type is the physical layout or arrangement of a room (e.g., classroom, conference, theater-style, rounds of 6, as-is, etc.). Setup types predefine rooms for a smoother booking process. Although configuring setup types is not required, setup type is used for defining the ...",t:"Configuring Setup Types"},"245":{i:0.000423657082880659,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigFeatures.html",a:"A feature is built-in or permanent attribute of a room, such as a network connection, a built-in plasma TV, window, and so on. Your users can use features as criteria when they are searching for a room. They can also filter the available rooms that can be reserved for an event by room features. ...",t:"Configuring Features"},"246":{i:0.000546011442633919,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigFloors.html",a:"A floor is optional information that you can provide when defining a room. This information will facilitate sorting, reporting, and searching for rooms. A room can be assigned to only a single floor. Example of floors include First Floor, Basement, and Garden Level. When you configure a floor, you ...",t:"Configuring Floors"},"247":{i:0.00351102893026003,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigFloorPlans.html",a:"This optional feature, enabled with an EMS Floor Plans license, allows users to view available rooms and book a space directly from a floor plan image in EMS Web App or EMS Kiosk App. This topic provides information on: Configure Floor Plan Indicators Configure a Floor Plan Diagram Map a Floor Plan ...",t:"Configuring Floor Plans"},"248":{i:0.000693808249455197,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigPublicViews.html",a:"Configure Public Views A public view, or simply a view, is a grouping of specific rooms that you configure. You use views to organize rooms within one building or across multiple buildings in a manner that makes sense for your organization. For example, you might create a view that includes only the ...",t:"Configuring Public Views"},"249":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_OverviewConfigRes.html",a:"Configuration \u003e Resources Overview Resources (also called booking detail items) are the individual items or services that your users can reserve for an event. Resources are grouped by category. For example, a furniture category might contain tables and chairs as the resources. Within a category, you ...",t:"Overview of Configuring Resources"},"250":{i:0.000700578715484833,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_CategoriesResourcesServices_WhatsDiff.htm",a:"In EMS, you may hear these terms used interchangeably sometimes, however, they are different concepts. A Category in EMS is anything you might add to a Booking such as Catering, Audio Visual, Furniture, Security, Notes, Attendee Names, Agendas etc. When you configure a Category, however, it must be ...",t:"Categories, Resources, and Services: What\u0027s the Difference?"},"251":{i:0.00870123323610365,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigResourcesforCat.html",a:"Resources (also called booking detail items) are the individual items or services that your users can reserve for an event. Resources are grouped by category. For example, a furniture category might contain tables and chairs as the resources. Although you can use categories to track setup notes, ...",t:"Configuring Resources for a Category"},"252":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ResourceConfigWiz.htm",a:"When you configure resources for a category, you have the option of configuring a single resource at a time through the Resources window, or you can use the Resource Configuration Wizard to configure multiple resources. You typically use the Resource Configuration Wizard to configure multiple ...",t:"Resource Configuration Wizard"},"253":{i:0.000402771907931259,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ImportResforCat.htm",a:"You can import resources for a category from a tab-delimited file. (See  Resource Import File Specifications  for the import file specifications.) After you import the resources, you can edit their configurations as necessary. On the EMS menu bar, click Configuration \u003e Resources. A list of all the ...",t:"Importing Resources for a Category"},"254":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_DefineResourceSel.htm",a:"After you configure a resource for a category, you can define selections and selection items for the resource. A selection is used when you offer choices with a resource. For example, a resource named Catered Breakfast might have the following description—Catered breakfast includes the choice of one ...",t:"Define Resource Selections and Selection Items"},"255":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigureServicesforCat.htm",a:"When your users are adding details to a booking, if they select a Catering or Resource, w/ Service Order category, they must specify a service. A service indicates how the resource is to be used or offered. For example, Delivery and Setup, Cleanup, Plated, Buffet, and so on are possible services for ...",t:"Configure Services for a Category"},"256":{i:0.000272571840061009,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DesktopClient_ConfigGroupingsResource.html",a:"Within a category, you can organize resources by Groupings. For example, you might configure Beverages, Entrees, and Desserts groupings for a Food Service category. The Beverage grouping might contain resources such as soda and coffee, the Entrees grouping might contain resources such as fish and ...",t:"Configuring Groupings for a Resource"},"257":{i:0.00138159768638443,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_DefineProdAreaItems.htm",a:"You use production items to define the quantity of components that make up a resource. For example, a resource called Box Lunch contains the following productions items—sandwich (quantity =1), chips (quantity =1), cookie (quantity = 2), and bottled water (quantity =1). If an order for 20 boxed ...",t:"Define Production Areas and Production Items for a Catering Resource"},"258":{i:0.000288090063005147,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigPricingResourceEditPriceWin.htm",a:"You can configure the pricing for a resource on the Pricing tab of the Resource dialog box, or you can configure the resource, and then configure the pricing for it at a later date on the Edit Pricing window. Tip: You can also configure the resource price at the time that you are configuring rate ...",t:"Configure the Pricing for a Resource on the Edit Pricing Window"},"259":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ExportPricInfo.htm",a:"You can export any pricing information that you configure for a resource on a per rate schedule basis on the Edit Pricing window. The information is exported to a Microsoft Excel file. Concept: You Can Assign Rate Schedules to Specific Rooms and Resources. After you define your organization’s rate ...",t:"Export Pricing Information for a Resource"},"260":{i:0.000240504717987375,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigBilling.htm",a:"Overview  Before you can use EMS to manage your organization’s events, you must configure core data items that are specific to your organization. For example, before you can automatically price items in a reservation, you must first configure rate schedules and pricing plans. Initial configuration ...",t:"Configuration \u003e Billing"},"261":{i:0.00551738359910152,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigRateSchedule.htm",a:"When you configure a rate schedule, you can configure one “from scratch,” or you can copy an existing rate schedule and edit the name and any configured pricing as needed to make a new rate schedule. After you configure a rate schedule, you can define the pricing for the billable items (rooms and ...",t:"Configure Rate Schedules"},"262":{i:0.000310347616879382,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigPricingPlan.htm",a:"A pricing plan bundles different rate schedules. When you configure a pricing plan, you can not only specify different rates schedules for the billable items in the plan, but also you can specify the calculation that is to be applied to a billable item when the plan is used for a group’s ...",t:"Configure Pricing Plans"},"263":{i:0.000202168016715395,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ExportPricingInfoBillableItems.htm",a:"After you configure a rate schedule and define the pricing for the billable items (rooms and resources) in the rate schedule, you can export the pricing information on the Edit Pricing window. The information is exported to a Microsoft Excel file. Notes: You do not need Microsoft Excel on your EMS ...",t:"Export Pricing Information for Billable Items (Rooms or Resources)"},"264":{i:0.00218476942323978,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigCalc.htm",a:"Calculations are additional charges that can be applied to billable items (a category, a group, a group type, a resource, or a room) such as gratuity or sales tax. Both pricing methods and calculations determine the final cost for a billable item; however, unlike pricing, which is applied when a ...",t:"Configure Calculations"},"265":{i:0.0012616049654882,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigAccount.htm",a:"EMS uses accounts to indicate where the monies that your organization receives for billable items should be deposited, based on your internal accounting system. Note: Accounts in EMS are used for reporting purposes only. EMS does not provide any functions for physically moving funds. Examples of ...",t:"Configure Accounts"},"266":{i:0.000333062127916861,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigPaymentType.htm",a:"A payment type indicates the forms of payment that your organization accepts. Payment types are also used to track the forms of payment that your groups are using. Examples of payment types include checks, credit card, and cash. Because payment types are for informational purposes only and do not ...",t:"Configure Payment Types"},"267":{i:0.000361004293932384,u:"../Content/EMSDesktopClient/V44.1/B_ConfigGuide/DC_CG_ConfigSalesCat.htm",a:"You can configure sales categories to sort your groups for the purposes of tracking sales figures. For example, you could sort your groups based on local, regional, and national sales figures. Because sales categories are for informational purposes only and do not affect the pricing or billing of an ...",t:"Configure Sales Categories"},});
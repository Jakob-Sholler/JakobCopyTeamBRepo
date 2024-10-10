

Software Requirements Specification  
for  
Helping Beginner Programmers Understand code  
Version 1.0 approved  
Prepared by   
Sebastian Anghel  
Dmitrii Tsutskov  
Jakob Sholler  
Boubacar Mankirba  
Ryan O’Sullivan

University of Maine\<Cos 420 Class\>  
10/6/24

Table of Contents  
Table of Contents	ii  
Revision History	ii  
1\.	Introduction	1  
1.1	Purpose	1  
1.2	Document Conventions	1  
1.3	Intended Audience and Reading Suggestions	1  
1.4	Product Scope	1  
1.5	References	1  
2\.	Overall Description	2  
2.1	Product Perspective	2  
2.2	Product Functions	2  
2.3	User Classes and Characteristics	2  
2.4	Operating Environment	2  
2.5	Design and Implementation Constraints	2  
2.6	User Documentation	2  
2.7	Assumptions and Dependencies	3  
3\.	External Interface Requirements	3  
3.1	User Interfaces	3  
3.2	Hardware Interfaces	3  
3.3	Software Interfaces	3  
3.4	Communications Interfaces	3  
4\.	System Features	4  
4.1	System Feature 1	4  
4.2	System Feature 2 (and so on)	4  
5\.	Other Nonfunctional Requirements	4  
5.1	Performance Requirements	4  
5.2	Safety Requirements	5  
5.3	Security Requirements	5  
5.4	Software Quality Attributes	5  
5.5	Business Rules	5  
6\.	Other Requirements	5  
Appendix A: Glossary	5  
Appendix B: Analysis Models	5  
Appendix C: To Be Determined List	6

Revision History V1.00  
Name	Jakob Sholler  
Date 10/9  
Reason For Changes compiling work together, adding all completed requirements and inserting them into the correct Sections of the document Also added a format for revision History(Just a small border and the 5 subsections.   
Version V1.01

Format For Edits:  
–-------------------------------------------------  
Revision History  
Name  
Date  
Reason for Changes  
Version  
—-----------------------------------------------

Introduction  
Purpose   
\<Identify the product whose software requirements are specified in this document, including the revision or release number. Describe the scope of the product that is covered by this SRS, particularly if this SRS describes only part of the system or a single subsystem.\>  
Document Conventions  
\<Describe any standards or typographical conventions that were followed when writing this SRS, such as fonts or highlighting that have special significance. For example, state whether priorities  for higher-level requirements are assumed to be inherited by detailed requirements, or whether every requirement statement is to have its own priority.\>  
Intended Audience and Reading Suggestions  
\<Describe the different types of reader that the document is intended for, such as developers, project managers, marketing staff, users, testers, and documentation writers. Describe what the rest of this SRS contains and how it is organized. Suggest a sequence for reading the document, beginning with the overview sections and proceeding through the sections that are most pertinent to each reader type.\>  
Product Scope  
\<Provide a short description of the software being specified and its purpose, including relevant benefits, objectives, and goals. Relate the software to corporate goals or business strategies. If a separate vision and scope document is available, refer to it rather than duplicating its contents here.\>  
References  
\<List any other documents or Web addresses to which this SRS refers. These may include user interface style guides, contracts, standards, system requirements specifications, use case documents, or a vision and scope document. Provide enough information so that the reader could access a copy of each reference, including title, author, version number, date, and source or location.\>  
Overall Description  
Product Perspective  
\<Describe the context and origin of the product being specified in this SRS. For example, state whether this product is a follow-on member of a product family, a replacement for certain existing systems, or a new, self-contained product. If the SRS defines a component of a larger system, relate the requirements of the larger system to the functionality of this software and identify interfaces between the two. A simple diagram that shows the major components of the overall system, subsystem interconnections, and external interfaces can be helpful.\>  
Product Functions  
\<Summarize the major functions the product must perform or must let the user perform. Details will be provided in Section 3, so only a high level summary (such as a bullet list) is needed here. Organize the functions to make them understandable to any reader of the SRS. A picture of the major groups of related requirements and how they relate, such as a top level data flow diagram or object class diagram, is often effective.\>  
User Classes and Characteristics  
\<Identify the various user classes that you anticipate will use this product. User classes may be differentiated based on frequency of use, subset of product functions used, technical expertise, security or privilege levels, educational level, or experience. Describe the pertinent characteristics of each user class. Certain requirements may pertain only to certain user classes. Distinguish the most important user classes for this product from those who are less important to satisfy.\>  
Operating Environment  
\<Describe the environment in which the software will operate, including the hardware platform, operating system and versions, and any other software components or applications with which it must peacefully coexist.\>  
Design and Implementation Constraints  
\<Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards (for example, if the customer’s organization will be responsible for maintaining the delivered software).\>  
User Documentation  
\<List the user documentation components (such as user manuals, on-line help, and tutorials) that will be delivered along with the software. Identify any known user documentation delivery formats or standards.\>  
Assumptions and Dependencies  
\<List any assumed factors (as opposed to known facts) that could affect the requirements stated in the SRS. These could include third-party or commercial components that you plan to use, issues around the development or operating environment, or constraints. The project could be affected if these assumptions are incorrect, are not shared, or change. Also identify any dependencies the project has on external factors, such as software components that you intend to reuse from another project, unless they are already documented elsewhere (for example, in the vision and scope document or the project plan).\>  
External Interface Requirements  
User Interfaces  
\<Describe the logical characteristics of each interface between the software product and the users. This may include sample screen images, any GUI standards or product family style guides that are to be followed, screen layout constraints, standard buttons and functions (e.g., help) that will appear on every screen, keyboard shortcuts, error message display standards, and so on. Define the software components for which a user interface is needed. Details of the user interface design should be documented in a separate user interface specification.\>  
Hardware Interfaces  
\<Describe the logical and physical characteristics of each interface between the software product and the hardware components of the system. This may include the supported device types, the nature of the data and control interactions between the software and the hardware, and communication protocols to be used.\>  
Software Interfaces  
\<Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Describe the services needed and the nature of communications. Refer to documents that describe detailed application programming interface protocols. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way (for example, use of a global data area in a multitasking operating system), specify this as an implementation constraint.\>  
Communications Interfaces  
\<Describe the requirements associated with any communications functions required by this product, including e-mail, web browser, network server communications protocols, electronic forms, and so on. Define any pertinent message formatting. Identify any communication standards that will be used, such as FTP or HTTP. Specify any communication security or encryption issues, data transfer rates, and synchronization mechanisms.\>  
System Features  
\<This template illustrates organizing the functional requirements for the product by system features, the major services provided by the product. You may prefer to organize this section by use case, mode of operation, user class, object class, functional hierarchy, or combinations of these, whatever makes the most logical sense for your product.\>  
System Feature 1  
\<Don’t really say “System Feature 1.” State the feature name in just a few words.\>  
4.1.1	Description and Priority  
\<Provide a short description of the feature and indicate whether it is of High, Medium, or Low priority. You could also include specific priority component ratings, such as benefit, penalty, cost, and risk (each rated on a relative scale from a low of 1 to a high of 9).\>  
4.1.2	Stimulus/Response Sequences  
\<List the sequences of user actions and system responses that stimulate the behavior defined for this feature. These will correspond to the dialog elements associated with use cases.\>  
4.1.3	Functional Requirements

**Functional requirements:** 

1\. Quiz/Test Feature for Learning Reinforcement  
1.1 Description and Priority  
This feature provides quizzes and tests to reinforce learning. It is of High priority.  
1.3 Functional Requirements  
REQ-1: The system must provide quizzes and tests on programming topics.  
REQ-2: The system must give feedback (correct/incorrect) after each question.

2\. Color-Coded Code Syntax Highlighting  
1.1 Description and Priority  
The system should provide color-coded syntax to make code easier to read. This feature is of High priority.  
1.3 Functional Requirements  
REQ-3: The system must apply syntax highlighting to all supported programming languages.

3\. Code Navigation via Click or Key Shortcuts  
1.1 Description and Priority  
A navigation feature that allows users to jump to specific segments of code (e.g., functions, classes). This feature is of Medium priority.  
1.3 Functional Requirements  
REQ-4: The system must allow users to click on or search for functions and jump to their definitions.  
REQ-5: The system must provide keyboard shortcuts for navigating code sections.

4\. Note and Annotation Feature  
1.1 Description and Priority  
This feature allows users to add personal notes or annotations above code segments. It is of Medium priority.  
1.3 Functional Requirements  
REQ-6: The system should display notes in a way that does not interfere with the code view.

5\. Simple Layout with Minimal Pop-Ups  
1.1 Description and Priority  
The interface should have a simple layout without overwhelming the user with pop-ups and other distractions. This is of High priority.  
1.3 Functional Requirements  
REQ-7: The system should limit the number of pop-ups or notifications during use.

6\. Coding Improvement Suggestions  
1.1 Description and Priority  
The system should offer suggestions on how users can improve their coding skills. This is of High priority.  
1.3 Functional Requirements  
REQ-8: The system should provide resources or links to help users address their weaknesses.

7\. Daily Practice Incentive System  
1.1 Description and Priority  
A feature that encourages daily use by offering points or rewards for consistent practice. This is of Medium priority.  
1.3 Functional Requirements  
REQ-9: The system must provide a point or reward system based on daily activity.  
REQ-10: The system should track consecutive days of user engagement.

8\. Code Review Section  
1.1 Description and Priority  
The system should provide short code review sections from previous lessons. This is of Medium priority.  
1.3 Functional Requirements  
REQ-11: The system must allow users to review past sections.  
REQ-12: The system should provide summaries from previous lessons.

9 . Positive Feedback and Reinforcement  
1.1 Description and Priority  
The system should offer positive reinforcement and feedback on the user's progress and skills. This is of High priority.  
1.3 Functional Requirements  
REQ-13: The system must provide encouraging messages after the user completes tasks.  
REQ-14: The system should reward the user with achievements.

**Interactive Coding Lessons**  
	**Description/Priority**: High priority. The app will provide interactive lessons that cover various programming concepts.  
	**Functional Requirements**: 

REQ-15 The app shall have lessons including explanations, examples, and interactive coding exercises.  
REQ-16 The app shall allow users to write and test code directly within the lesson.

**Code Challenges**  
**Description/Priority**: High priority. Users will be able to apply their learning through challenges and quizzes.  
**Functional Requirements**:

REQ-17 The app shall offer coding challenges at varying difficulty levels based on the users level.  
REQ-18 The app shall provide daily challenges to warm up the user prior to working on the lessons.

**Step-by-Step Tutorials**  
**Description/Priority**: Medium priority. The app will offer tutorials that guide users through building simple projects.  
**Functional Requirements**:

REQ-19 The app shall include tutorials that users can follow to create small projects. (calculator, little games, etc.)  
REQ-20 The app shall allow users to track their progress through each tutorial through a progress bar at the top of their screen..

**Community Forum**  
**Description/Priority**: Low priority. A space for users to ask questions and share knowledge.  
**Functional Requirements**:

REQ-21 The app shall provide a community forum where users can ask for help or help others.  
REQ-22 The users should be able to like a forum posted by someone else.

**Code Coloring**  
**Description/Priority**: Medium priority. visually enhance code readability.  
**Functional Requirements**:

REQ-23 The app shall provide coloring for functions, variables, and imports making it easy to read.  
REQ-24 The app should also display error messages or warnings in the coding editor.

**Progress Tracking**  
**Description/Priority**: Medium priority. Users can track their learning.  
**Functional Requirements**:

REQ-25 The app shall track the user's progress through lessons, quizzes, and challenges.  
REQ-26The app shall display a dashboard showing completed lessons. Along with a streak counter.

**Resource Library**  
**Description/Priority**: Medium priority. A collection of learning materials and references.  
**Functional Requirements**:

REQ-27 The app shall provide links to different resources that can help a user learn more.

REQ-28 The app shall allow users to bookmark resources for later reference.

**Personalized Learning Path**  
**Description/Priority**: Low priority. Customized learning experiences based on preferences.  
**Functional Requirements**:

REQ-29 The app shall offer users the option to choose a learning path based on their interests and goals.  
REQ-30 The app shall recommend lessons and challenges based on their previous lessons.

**Feedback Mechanism**  
**Description/Priority**: Low priority. Collect user feedback to improve content and features.  
**Functional Requirements**:

REQ-31 The app shall include a feedback form for users to write any concerns they have  
REQ 32 The app shall allow users to rate lessons and suggest improvements.

**In-App Coding Environment**  
**Description/Priority**: High priority. An integrated coding environment.  
**Functional Requirements**:

REQ-33 The app shall provide a built-in coding environment where users can write, run, and debug their code.  
REQ-34 The app shall allow users to choose a language for the coding environment.

**Performance Requirements:**   
NFREQ-1 The system should be able to handle a standard workload of 1000 users 90% of the time   
Rationale \- This requirement is important to maintain responsiveness and functionality under user loads. 1000 users will simulate a large load on our system.   
Timing: As the next requirement down below the system should respond within 2 seconds maximum.  Things such as Logon, Search, Accessing work. 

NFREQ-3. Compatibility         The app should function with all major browsers. Firefox Chrome, Safari. 

NFREQ-9 Searching for work           The app should have a search for content,( Languages specific sections like Arrays etc) and return the results on the app within 2 seconds(Only stuff on our app not actually searching google)

**NFREQ-13 Reliability and Availability**:

* *Description*: The app shall be consistently available for use with minimal downtime.  
* *Requirement*: Maintain an uptime of **99.9%**, excluding scheduled maintenance periods notified in advance.  
* *Justification*: Allows users to practice and learn at any time, accommodating different schedules and time zones.

\<If there are performance requirements for the product under various circumstances, state them here and explain their rationale, to help the developers understand the intent and make suitable design choices. Specify the timing relationships for real time systems. Make such requirements as specific as possible. You may need to state performance requirements for individual functional requirements or features.\>

Safety Requirements

\<Specify those requirements that are concerned with possible loss, damage, or harm that could result from the use of the product. Define any safeguards or actions that must be taken, as well as actions that must be prevented. Refer to any external policies or regulations that state safety issues that affect the product’s design or use. Define any safety certifications that must be satisfied.\>

Security Requirements  
NFREQ-2 The system shall require a password minimum of 8 characters, and include at least 1 symbol,number or Capital letter. 

NFREQ-8 Session Management	The user should be logged out after 2 hours of inactivity. 

**NFREQ-14 Security**:

* *Description*: The app shall protect user data and ensure secure interactions.  
* *Requirement*: Implement encryption for data transmission (e.g., HTTPS), secure user authentication, and comply with relevant data protection regulations like **GDPR**.  
* *Justification*: Builds user trust by safeguarding personal information and providing a secure learning environment

\<Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.\>  
Software Quality Attributes  
\<Specify any additional quality characteristics for the product that will be important to either the customers or the developers. Some to consider are: adaptability, availability, correctness, flexibility, interoperability, maintainability, portability, reliability, reusability, robustness, testability, and usability. Write these to be specific, quantitative, and verifiable when possible. At the least, clarify the relative preferences for various attributes, such as ease of use over ease of learning.\>  
Business Rules  
\<List any operating principles about the product, such as which individuals or roles can perform which functions under specific circumstances. These are not functional requirements in themselves, but they may imply certain functional requirements to enforce the rules.\>  
Other Requirements  
NFREQ-4 Maintainability:   The backend System should follow practices and procedures to allow for easier future updating and fixes.

NFREQ-5 Bug Reporting	Users should be able to report any bugs or provide feedback.

NFREQ-6 Documentation	Guides and FAQ’S should be easily accessible in the app. 

NFREQ-7 Notifications	The app should allow for users to be sent notifications for reminders of practice.  

NFREQ-10 Training		There should be video tutorials of the base features and how to use them. 

**NFREQ-11 Usability**:

* *Description*: The app shall provide an intuitive and user-friendly interface that accommodates beginner programmers.  
* *Requirement*: Users should be able to navigate through the app and access features without prior training or technical support.  
* *Justification*: Enhances the learning experience by reducing the cognitive load associated with complex interfaces.

\<Define any other requirements not covered elsewhere in the SRS. This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on. Add any new sections that are pertinent to the project.\>

Appendix A: Glossary  
\<Define all the terms necessary to properly interpret the SRS, including acronyms and abbreviations. You may wish to build a separate glossary that spans multiple projects or the entire organization, and just include terms specific to a single project in each SRS.\>  
Appendix B: Analysis Models  
\<Optionally, include any pertinent analysis models, such as data flow diagrams, class diagrams, state-transition diagrams, or entity-relationship diagrams.\>  
Appendix C: To Be Determined List  
\<Collect a numbered list of the TBD (to be determined) references that remain in the SRS so they can be tracked to closure.\>
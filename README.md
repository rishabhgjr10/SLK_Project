Collaborative Editing App

This application allows users to collaboratively edit documents in real-time.

Roles
Admin: Manages documents and user access.
User: Edits documents and collaborates with others.

Sprint 1
User Stories
Login/Logout/Registration: Users can create accounts, log in, and log out.
Document Listing: Users can view a list of documents uploaded by admins.
Document Search: Users can search for documents by name.
Document Selection: Users can apply for editing specific documents.
Document Editing: Users can make changes to documents.
Admin Stories
Login/Logout: Admins can log in and log out.
Document CRUD: Admins can create, read, update, and delete documents.
User Applications: Admins can view users who have applied to edit documents.
Database Structure

Documents: Document ID, name, last modified date, etc.
Users: User ID, username, password, role (admin or user).
DocumentApplications: Document ID, user ID, application status.
Sprint 2
User Stories
Comments/Notes: Users can add comments or notes to documents.
Additional Considerations

Real-time Collaboration: Implement a system to allow multiple users to edit a document simultaneously.
Version Control: Keep track of different versions of a document for easy rollback.
Access Control: Ensure that users have appropriate permissions to view and edit documents.
Security: Implement measures to protect user data and prevent unauthorized access.
Technologies

Frontend: React
Backend: Node.js
Database: MongoDB
Real-time Collaboration: Firebase Realtime Database or Socket.io

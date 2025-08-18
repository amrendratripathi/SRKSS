# File Upload Setup Guide

This guide explains how to set up and use the file upload functionality for profile pictures and payment screenshots in the Radhe Krishna Sansthan web application.

## 🚀 Quick Start

### 1. Start the Backend Server

First, start the file upload server:

```bash
cd server
npm install
npm start
```

The server will run on `http://localhost:3001`

### 2. Start the Frontend Application

In a new terminal, start the React application:

```bash
npm run dev
```

The frontend will run on `http://localhost:8080`

## 📁 What's New

### Backend Server (`/server`)
- **Express.js server** with file upload handling
- **Multer middleware** for file processing
- **File validation** (5MB limit, images only)
- **RESTful API** endpoints for uploads
- **Local file storage** in `/server/uploads/`

### Frontend Updates
- **File upload service** (`/src/utils/fileUpload.ts`)
- **Uploaded photos display** (`/src/components/UploadedPhotos.tsx`)
- **Enhanced form validation** with file previews
- **Real-time upload status** and error handling

## 🔧 Features

### File Upload
- ✅ Profile photo uploads
- ✅ Payment screenshot uploads
- ✅ File type validation
- ✅ File size validation (5MB max)
- ✅ Real-time previews
- ✅ Upload progress indicators

### File Management
- ✅ View all uploaded photos
- ✅ Download files
- ✅ Delete files
- ✅ File metadata display
- ✅ Responsive grid layout

### User Experience
- ✅ Drag & drop file selection
- ✅ Image previews before upload
- ✅ Success/error notifications
- ✅ Loading states
- ✅ Hindi language support

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload/photo` | Upload profile photo |
| POST | `/upload/screenshot` | Upload payment screenshot |
| GET | `/files` | Get all uploaded files |
| DELETE | `/files/:filename` | Delete specific file |

## 🎯 Usage

### 1. Upload Files
- Go to the Join Trust page
- Select profile photo and payment screenshot
- Files are validated and uploaded automatically
- View real-time upload status

### 2. View Uploaded Photos
- Navigate to the main page
- Scroll down to see the "Uploaded Photos" section
- View, download, or delete files as needed

### 3. Trust Card Generation
- After successful uploads, generate trust membership card
- Profile photo appears on the card
- Download card as PNG image

## 🛠️ Troubleshooting

### Common Issues

**Server won't start:**
- Check if port 3001 is available
- Ensure all dependencies are installed
- Check console for error messages

**Uploads fail:**
- Verify server is running on port 3001
- Check file size (must be < 5MB)
- Ensure file is an image format
- Check browser console for errors

**Photos don't display:**
- Verify file upload was successful
- Check server uploads directory
- Ensure CORS is properly configured

### File Size Limits
- **Maximum file size:** 5MB
- **Supported formats:** JPG, PNG, GIF, WebP
- **Recommended dimensions:** 500x500px or larger

## 🔒 Security Considerations

- Files are stored locally (development only)
- No authentication required (development only)
- File type validation prevents malicious uploads
- Unique filenames prevent conflicts

## 🚀 Production Deployment

For production deployment:

1. **Use cloud storage** (AWS S3, Google Cloud Storage)
2. **Add authentication** to upload endpoints
3. **Implement rate limiting**
4. **Add virus scanning**
5. **Use HTTPS** for secure file transfers
6. **Set up proper backup** for uploaded files

## 📞 Support

If you encounter issues:

1. Check the browser console for errors
2. Verify server is running and accessible
3. Check file permissions in uploads directory
4. Ensure all dependencies are installed correctly

---

**Note:** This is a development setup. For production use, implement proper security measures and use cloud storage solutions.


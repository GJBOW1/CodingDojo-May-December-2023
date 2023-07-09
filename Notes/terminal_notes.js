// Basic Terminal Commands used:

// cd: Changes which directory your terminal is looking at.
// cat: Outputs the contents of a text file into the terminal window.

// Present working directory: pwd 
// Use this command any time you are unsure where you are currently in your file structure. pwd stands for 
// Present Working Directory. For Windows, you may either use pwd or cd.

// List Files: ls 
// Use the ls command to see all the directories and files that are in your current directory. To clear things 
// up, a directory is just a synonym for a folder. In 'cmd', use the dir command instead. 

// list files long form: ls -l
// Use the 'ls -l' command to see a long form, representation of the directories and files inside your current directory.

// You will see some cryptic messages on the side. The 'drwx' thing that you see are just file permissions for 
// that particular directory or file. For example, the first set of '-'s that follow the 'd' are the permissions 
// allowed for the user. If it says 'rwx' it means the user is allowed to read, write and execute the file. If 
// it just says 'r--' means that the user can only read the file. The second set of three '-'s represent the 
// permissions for a group. The last three '-'s represent the permissions for people who are not the user and 
// are not in the particular group that is allowed. We will have to be changing some of these permissions when 
// we deploy our applications in the cloud. For now, it's important to know that there are different file 
// permissions which can either be read, write, or execute, and these permissions can vary depending on if you 
// are the user, or in the group specified in the listing.

// list all files long form: ls -a
// Use the 'ls - a' command to see ALL the files. Linux flavored operating systems hide files that start with 
// a '.' by default. This command will show all the previous files and hidden files if there are any. The 
// files that start with a '.' are often configuration files.

// Changing to the current directory: cd .
// From the previous command, we saw that 'ls - a' will list some interesting file names like '.' and '..' 
// The '.' is reserved to represent the current directory that we are in. If you run the 'cd . ' and then run 
// the 'pwd' command, you'll see that we didn't move to a different directory. We told the computer to change 
// our directory to our current directory which means don't go anywhere! The cd command works well in 'cmd' 
// as well. 

// Changing to the parent directory: cd ..
// Like the 'cd . ' command, the '..' is reserved to represent the parent directory of the current folder that 
// we are in. If you run this command and then run the 'pwd' command, you'll see that we navigated up one 
// directory(folder) structure. If you feel like the File Structure is starting to resemble the DOM (Document 
// Object Model), it's because they are very similar.

// Changing to the Root Directory: cd /
// This command will change to the root directory of your computer. From this folder, you can access your 
// application folders.

// Changing to any folder: cd folder_name
// The 'cd' command followed by a space and name of the folder you want to access will move you into that 
// directory, if it exists. This example would move you into the 'folder_name' directory.

// Making a new folder: mkdir new_directory_name
// This command will make a new directory named 'new_directory_name'. Whatever argument you pass into this 
// command will be the name of your new file. After making the directory, you could run 'cd new_folder_name' 
// to enter into that directory.

// Delete an empy directory (folder): rm -rf directory_name
// If you try to delete a folder with contents inside you will get an error! Our computer wants us to say 
// more explicitly to delete this directory and everything inside of it by passing the '-rf' option. Be 
// careful with this command as could it accidentally delete files you didn't intend to delete or delete 
// some config files that you wouldn't want deleted at all! In 'cmd', the command name is del, but the 
// results are the same. 

// Creating a new file: touch index.html -OR- touch style.css
// The 'touch' command will create a new, empty file with the name and extension type that you specify. You 
// can make any type of file if you provide the extension type. Run the above commands, and then run 'ls' 
// and you will see your new files in the listing.

// Remove a file: rm index.html
// The 'rm' command removes any file with the filename and extension provided.

// Renaming/Moving a file: mv index.html new_name_index.html -AND- mv new_name_index.html ../new_name_index.html
// The 'mv' command has two uses. First, you can rename a file by first providing the file's name and then 
// providing what you want the file to be renamed to. In the first example, index.html would be renamed to 
// new_name_index.html. Second, it can be used to move a file to a different folder. In the second example, 
// new_name_index.html would be moved up one directory with the same name. In either case, think of this 
// command as moving a file - into its current directory with a different name or into a different directory 
// with the same or different name.

// Copying a file: cp index.html copy.html
// The 'cp' command will copy a file into the current directory with the new name you provided. In the 
// example, say you were in your Desktop directory and you ran the above command. The Desktop directory would 
// now have index.html and copy.html in it.

// Copying a directory: cp -rf directory_name copy_directory_name
// Copying a directory is similar to a file but we need to pass the '-rf' option in order to copy all the 
// internal contents of the directory. First provide the name of the directory you want to copy and then the 
// name of the copy.

// Opening current directory in your GUI: open . 
// The 'open' command will open your current directory in your GUI (in 'cmd' or command prompt, use "start ." 
// instead). Likewise, you could open a file inside your directory by running something like "open file_name". 
// *Note* this command will only work on your local machine, but not on your virtual machine in the Cloud when 
// you are deploying.

// Last note: When you are navigating the terminal on your virtual machine in the Cloud, you may encounter 
// these commands throwing back an error. When that happens, prefix your command with 'sudo' which tells the 
// computer that you are the Super User. 'sudo' stands for 'Super User do'. This will become more relevant 
// when we start deploying applications in the cloud, but just know that something like 'sudo' exists.

// for example, you can run all the same commands but prefix them with sudo
// sudo mkdir test
// sudo touch index.html
// sudo rm -rf test





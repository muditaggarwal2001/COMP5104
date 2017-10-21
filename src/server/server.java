package server;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.util.Timer;

import org.apache.log4j.Logger;

public class server {
	public static Logger logger = Trace.getInstance().getLogger(server.class);
	

	public static void main(String[] args) {
		String f = "file.txt";
		University u;
		Timer time = new Timer(true);
		List<University> list = null;
		ObjectInputStream fin;
		ObjectOutputStream fout;
		File file= new File(f);
		ServerSocket server =null;
		Socket client =null;
		DataInputStream din =null;
		DataOutputStream dout =null;
		ServerConnection sc;
		boolean avail = true;
		if(!file.exists())
		{	logger.info("New Database Created");
			 u=new University();
			 list = new ArrayList<University>();
			 list.add(u);
		}	
			 
		else
		{
			try {
				FileInputStream fi = new FileInputStream(file);
				fin = new ObjectInputStream(fi);
				list = (List<University>)fin.readObject();
				fin.close();
				fi.close();
				logger.info("Reading Existing Database");
			} catch (FileNotFoundException e) {
				logger.fatal("File not Found");
				e.printStackTrace();
			} catch (IOException e) {
				logger.error("IO from file exception -"+e);
				e.printStackTrace();
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
		}
		try {
			String x;
			server =  new ServerSocket(5000);
			time.schedule(new ClerkAllower(list, false), config.clerktime);
			time.schedule(new DCDeadline(list, true), config.RegisterDeadline);
			time.schedule(new TermEndEvent(list,true), config.Termend);
			while(avail)
			{
				client =  server.accept();
				logger.info(client+" Connected to the Server");
				din = new DataInputStream(client.getInputStream());
				dout = new DataOutputStream(client.getOutputStream());
				dout.writeUTF("Welcome To JP University\nEnter your Designation:\n1.clerk\n2.student\n3.Enter exit to Terminate");
				x= din.readUTF();
				while(!(x.equalsIgnoreCase("exit")||x.equalsIgnoreCase("clerk")||x.equalsIgnoreCase("student")))
				{
					dout.writeUTF("You have entered wrong designation\nEnter your Designation:\n1.clerk\n2.student\n3.Enter exit to Terminate");
					x=din.readUTF();
					logger.info("User entered wrong Designation");
				}
				if(x.equalsIgnoreCase("exit"))
					break;
				sc = new ServerConnection(list, x, client);
				sc.start();
			}
			
			din.close();
			dout.close();
			client.close();
			server.close();
			time.schedule(new ClerkAllower(list, true),0);
			time.schedule(new DCDeadline(list, false), 0);
			time.schedule(new TermEndEvent(list,false), 0);
			Thread.sleep(10);
			FileOutputStream fo = new FileOutputStream(file);
			fout = new ObjectOutputStream(fo);
			fout.writeObject(list);
			fout.flush();
			fout.close();
			fo.close();
			logger.info("All the Changes reflected to the Database");
		} catch (IOException e) {
			logger.error("Client server IO error - "+e);
			e.printStackTrace();
		} catch (InterruptedException e) {
			logger.error("Server main Thread Error while putting it to sleep - "+e);
			e.printStackTrace();
		}
	}

}

package Client;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class Client {

	public static void main(String[] args) {
	try {
		Socket socket = new Socket("localhost", 5000);
		DataInputStream din = new DataInputStream(socket.getInputStream());
		DataOutputStream dout = new DataOutputStream(socket.getOutputStream());
		Scanner scanner = new Scanner(System.in);
		String output;
		while(true)
		{
			System.out.println(din.readUTF());
			output = scanner.nextLine();
			dout.writeUTF(output);
			if(output.equalsIgnoreCase("exit")||output.equalsIgnoreCase("no"))
				break;
		}
		scanner.close();
		din.close();
		dout.close();
		socket.close();
	} catch (UnknownHostException e) {
		e.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	}catch(Exception e){
		e.printStackTrace();
	}
	

	}

}

package server;

import java.util.List;
import java.util.TimerTask;

public class ClerkAllower extends TimerTask {
	private University u;
	private boolean permission;
	public ClerkAllower(List<University> list , boolean b) {
		u = list.get(0);
		permission = b;
		server.logger.info("Clerk permission to create course and student which is "+permission+" initiated");
	}
	@Override
	public void run() {
		u.setClerkAllowed(permission);
		if(!permission)
		{
			u.setStudentAllowed(true);
			server.logger.info("Clerk permission false Set and Student register event is set");
		}
		else
		{
			u.setStudentAllowed(false);
			server.logger.info("Clerk permission True Set and Student register event is unsetted");
		}
	}
}

package server;

import java.util.List;
import java.util.TimerTask;

public class DCDeadline extends TimerTask {
	private University u;
	private boolean arrived;
	
	public DCDeadline(List<University> list , boolean b) {
			u = list.get(0);
			arrived = b;
			server.logger.info("Drop course deadline set to "+ arrived +" initialized");
	}

	@Override
	public void run() {
		if(arrived)
		{
			u.setDropDeadline(true);
		}
		else
			u.setDropDeadline(false);
		server.logger.info("Drop course deadline set to "+ arrived);
	}

}

package server;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class Trace {
	private static Trace _instance = null;		
	public Logger getLogger (Object o) {
		return Logger.getLogger(o.getClass().getName());
	}
	
	private Trace() {
		PropertyConfigurator.configure(".//log4j.properties");
	}

	public static Trace getInstance() {
		if (_instance == null) {
			synchronized (Trace.class) {
				_instance = new Trace();
			}
		}
		return _instance;
	}
}

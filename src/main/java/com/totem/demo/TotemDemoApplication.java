package com.totem.demo;

import io.dropwizard.Application;
import io.dropwizard.setup.Environment;
import org.totem.demo.config.TotemDemoConfiguration;

/**
 * Created by skhera on 4/26/16.
 */
public class TotemDemoApplication extends Application<TotemDemoConfiguration> {

  public static void main(String[] args) throws Exception {
    new TotemDemoApplication().run(args);
  }

  @Override
  public String getName() {
    return "totem-demo";
  }

  @Override
  public void run(TotemDemoConfiguration config, Environment environment) throws Exception {

  }
}

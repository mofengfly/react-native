// Copyright 2004-present Facebook. All Rights Reserved.

#import "AppDelegate.h"

#import "RCTRootView.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  RCTRootView *rootView = [[RCTRootView alloc] init];

  // Loading JavaScript code - uncomment the one you want.

  // OPTION 1
  // Load from development server. Start the server from the repository root:
  //
  // $ npm start
  //
  // To run on device, change `localhost` to the IP address of your computer, and make sure your computer and
  // iOS device are on the same Wi-Fi network.
 jsCodeLocation = [NSURL URLWithString:@"http://192.168.0.11:8081/Examples/Weather/js/WeatherApp.includeRequire.runModule.bundle"];

  // OPTION 2
  // Load from pre-bundled file on disk. To re-generate the static bundle, run
  //
  // $ curl http://localhost:8081/Examples/TicTacToe/TicTacToeApp.includeRequire.runModule.bundle -o main.jsbundle
  //
  // and uncomment the next following line
   // jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];

  rootView.scriptURL = jsCodeLocation;
  rootView.moduleName = @"Weather";

  // NSArray *fontFamilies = [UIFont familyNames];
  // for (int i = 0; i < [fontFamilies count]; i++)
  // {
  //     NSString *fontFamily = [fontFamilies objectAtIndex:i];
  //     NSArray *fontNames = [UIFont fontNamesForFamilyName:[fontFamilies objectAtIndex:i]];
  //     NSLog (@"%@: %@", fontFamily, fontNames);
  // }

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end

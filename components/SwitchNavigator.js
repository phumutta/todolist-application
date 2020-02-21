import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Main1 from './main'
import Main2 from './main2'
// import Setting from './Setting'
// import Account from './Account'
// import AccountLogin from './AccountLogin'
import Today from './Today2'
// import Tomorrow from './Tomorrow'
import Tomorrow from './Today'
import Upcoming from './Upcoming'
import Someday from './Someday'
import Completed from './Completed'
import Inbox from './Inbox'
import First from './First'
import Login from './Login'
import Register from './Register'
import Setting from './Setting'
import Account from './Account'
import AccountLogin from './AccountLogin'
import Forest from './Forest'
import Avatar from './Avatar'
import timer from './Time'
import Items2 from './Items2'
import Edit from './Edit'
import Ranking from './Ranking'
import Group from './Group'
import Edit_Note from './Edit_Note'
import Edit_DueDate from './Edit_DueDate'
import Edit_PomodoroNumber from './Edit_PomodoroNumber'
import Edit_Reminder from './Edit_Reminder'
import Edit_Repeat from './Edit_Repeat'

import { createSwitchNavigator, createAppContainer } from 'react-navigation'

const navigator = createSwitchNavigator({
  First: {
    screen: First, navigationOptions: {
      title: 'First'
    }
  },
  Register: {
    screen: Register, navigationOptions: {
      title: 'Register'
    }
  },
  Login: {
    screen: Login, navigationOptions: {
      title: 'Login'
    }
  },
  Main1: {
    screen: Main1, navigationOptions: {
      title: 'Main1', headerShown: false
    }
  },
  Main2: {
    screen: Main2, navigationOptions: {
      title: 'Main2', headerShown: false
    }
  },
  Today: {
    screen: Today, navigationOptions: {
      title: 'Today', headerShown: false
    }
  },
  Tomorrow: {
    screen: Tomorrow, navigationOptions: {
      title: 'Tomorrow', headerShown: false
    }
  },
  Upcoming: {
    screen: Upcoming, navigationOptions: {
      title: 'Upcoming', headerShown: false
    }
  },
  Someday: {
    screen: Someday, navigationOptions: {
      title: 'Someday', headerShown: false
    }
  },
  Completed: {
    screen: Completed, navigationOptions: {
      title: 'Completed', headerShown: false
    }
  },
  Inbox: {
    screen: Inbox, navigationOptions: {
      title: 'Inbox', headerShown: false
    }
  },


  Setting: {
    screen: Setting, navigationOptions: {
      title: 'Setting'
    }
  },
  Account: {
    screen: Account, navigationOptions: {
      title: 'Account'
    }
  },
  Forest: {
    screen: Forest, navigationOptions: {
      title: 'Forest'
    }
  },
  AccountLogin: {
    screen: AccountLogin, navigationOptions: {
      title: 'AccountLogin'
    }
  },

  Avatar: {
    screen: Avatar, navigationOptions: {
      title: 'Avatar'
    }
  },
  timer: {
    screen: timer, navigationOptions: {
      title: 'timer'
    }
  },


  Items2: {
    screen: Items2, navigationOptions: {
      title: 'Items2'
    }
  },
  Ranking: {
    screen: Ranking, navigationOptions: {
      title: 'Ranking'
    }
  },
  Edit: {
    screen: Edit, navigationOptions: {
      title: 'Edit'
    }
  },
  Group: {
    screen: Group, navigationOptions: {
      title: 'Group'
    }
  },


  Edit_DueDate: {
    screen: Edit_DueDate, navigationOptions: {
      title: 'Edit_DueDate'
    }
  },
  Edit_Note: {
    screen: Edit_Note, navigationOptions: {
      title: 'Edit_Note'
    }
  },
  Edit_PomodoroNumber: {
    screen: Edit_PomodoroNumber, navigationOptions: {
      title: 'Edit_PomodoroNumber'
    }
  },
  Edit_Reminder: {
    screen: Edit_Reminder, navigationOptions: {
      title: 'Edit_Reminder'
    }
  },
  Edit_Repeat: {
    screen: Edit_Repeat, navigationOptions: {
      title: 'Edit_Repeat'
    }
  },

 

});

export default createAppContainer(navigator);

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Main1 from './main'
import Main2 from './main2'
// import Setting from './Setting'
// import Account from './Account'
// import AccountLogin from './AccountLogin'
import Today from './Today'
import AddTask from './AddTask'
import AddColor from './AddColor'
import Tomorrow from './Tomorrow'
import Upcoming from './Upcoming'
import Someday from './Someday'
import Completed from './Completed'
import Note from './Note'
import First from './First'
import Login from './Login'
import Register from './Register'
import Setting from './Setting'
import Account from './Account'
import AccountLogin from './AccountLogin'
import Forest from './Forest'
import Report from './Report'
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
import CreateNewGroup from './CreateNewGroup'
import GroupDetail from './GroupDetail'
import AddNote from './AddNote'
import EditGroupTask from './EditGroupTask'

import Edit_Today from './Edit_Today'
import Edit_Tomorrow from './Edit_Tomorrow'
import Edit_Upcoming from './Edit_Upcoming'
import Edit_Someday from './Edit_Someday'
import Edit_Completed from './Edit_Completed'
import HelpAndFeedback from './HelpAndFeedback'

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
  Note: {
    screen: Note, navigationOptions: {
      title: 'Note', headerShown: false
    }
  },
  AddNote: {
    screen: AddNote, navigationOptions: {
      title: 'AddNote'
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
  Report: {
    screen: Report, navigationOptions: {
      title: 'Report'
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
  GroupDetail: {
    screen: GroupDetail, navigationOptions: {
      title: 'GroupDetail'
    }
  },
  EditGroupTask: {
    screen: EditGroupTask, navigationOptions: {
      title: 'EditGroupTask'
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
  CreateNewGroup: {
    screen: CreateNewGroup, navigationOptions: {
      title: 'CreateNewGroup'
    }
  },
  AddTask: {
    screen: AddTask, navigationOptions: {
      title: 'AddTask'
    }
  },
  AddColor: {
    screen: AddColor, navigationOptions: {
      title: 'AddColor'
    }
  },
  Edit_Today: {
    screen: Edit_Today, navigationOptions: {
      title: 'Edit_Today'
    }
  },
  Edit_Tomorrow: {
    screen: Edit_Tomorrow, navigationOptions: {
      title: 'Edit_Tomorrow'
    }
  },
  Edit_Upcoming: {
    screen: Edit_Upcoming, navigationOptions: {
      title: 'Edit_Upcoming'
    }
  },
  Edit_Someday: {
    screen: Edit_Someday, navigationOptions: {
      title: 'Edit_Someday'
    }
  },
  Edit_Completed: {
    screen: Edit_Completed, navigationOptions: {
      title: 'Edit_Completed'
    }
  },
  HelpAndFeedback: {
    screen: HelpAndFeedback, navigationOptions: {
      title: 'HelpAndFeedback'
    }
  },
 




 

});

export default createAppContainer(navigator);

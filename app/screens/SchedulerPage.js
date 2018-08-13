import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, DatePickerAndroid, Modal } from 'react-native';
import Timeline from '../component/Timeline'
import EventModal from '../component/EventModal'
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Wednesday", "Tuesday", "Thursday", "Friday", "Saturday"];

export default class SchedulerPage extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.calendarChange = this.calendarChange.bind(this);
    this.todayDate = new Date();
    var numOfDays = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth() + 1, 0).getDate();
    var dateData = []
    for (i = 1; i <= numOfDays; i++) {
      var dayName;
      if (i == this.todayDate.getDate()) {
        dayName = "Today";
      } else {
        dayName = dayNames[((i + this.todayDate.getDay() - this.todayDate.getDate()) % 7 + 7) % 7].slice(0, 3);
      }
      dateData.push({ key: `${i}`, day: `${dayName}` });
    }
    this.state = {
      selectedYear: 2018,
      selectedMonth: 1,
      selectedDateIndex: (this.todayDate.getDate() - 1),
      dateData: dateData,
      eventData: [],
      isModalOpen: false,
      selectedEventData: { time: '', title: '', description: "" },
    };
  }

  componentDidMount() {
    var selectedMonth = this.todayDate.getMonth()
    var selectedYear = this.todayDate.getFullYear()
    this.setState({ selectedMonth })
    this.setState({ selectedYear })
    this.fillDummyEvent(this.todayDate.getDate(), selectedMonth)
  }

  onNavigatorEvent(event) {
    if (event.id == 'willAppear') {
      if (this._dateFlatList) {
        this._dateFlatList.scrollToIndex({ index: (this.todayDate.getDate() - 1), animated: false })
      }
    }
    if (event.id == 'bottomTabReselected') {
      if (this._dateFlatList) {
        this._dateFlatList.scrollToIndex({ index: (this.todayDate.getDate() - 1), animated: true })
      }
    }
  }

  fillDummyEvent(day, month) {
    var eventData = [
      { time: '09:00', title: 'Event 1', description: `Event 1 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '10:45', title: 'Event 2', description: `Event 2 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '12:00', title: 'Event 3', description: `Event 3 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '13:00', title: 'Event 4', description: `Event 4 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '14:15', title: 'Event 5', description: `Event 5 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '15:30', title: 'Event 6', description: `Event 6 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '16:00', title: 'Event 7', description: `Event 7 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '16:45', title: 'Event 8', description: `Event 8 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '17:30', title: 'Event 9', description: `Event 9 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '18:30', title: 'Event 10', description: `Event 10 - Day ${day} - Month ${monthNames[month]} - Description` },
      { time: '20:00', title: 'Event 11', description: `Event 11 - Day ${day} - Month ${monthNames[month]} - Description` }
    ]
    this.setState({ eventData });
  }

  handleDateIndexChange(selectedDateIndex) {
    this.setState({ selectedDateIndex })
    this.forceUpdate()
    this.fillDummyEvent(selectedDateIndex + 1, this.state.selectedMonth)
  }

  handleMonthChange(month, Year) {
    var numOfDays = new Date(Year, month + 1, 0).getDate();
    var dateData = []
    for (i = 1; i <= numOfDays; i++) {
      var dayName;
      if (i == this.todayDate.getDate()) {
        dayName = "Today";
      } else {
        dayName = dayNames[((i + this.todayDate.getDay() - this.todayDate.getDate()) % 7 + 7) % 7].slice(0, 3);
      }
      dateData.push({ key: `${i}`, day: `${dayName}` });
      this.setState({ dateData })
    }
  }

  async calendarChange() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        selectedYear = year;
        selectedMonth = month;
        selectedDateIndex = day - 1;
        await this.setState({ selectedYear });
        await this.setState({ selectedMonth });
        await this.handleDateIndexChange(selectedDateIndex)
        this.handleMonthChange(month, year);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }
  async calendarFunction() {
    await this.calendarChange()
    if (this._dateFlatList) {
      this._dateFlatList.scrollToIndex({ index: this.state.selectedDateIndex, animated: false })
    }
  }

  _renderModal() {
    return (
      <EventModal
        eventID={this.state.selectedEventData.time}
        eventName={this.state.selectedEventData.title}
        Time={this.state.selectedEventData.time}
        Description={this.state.selectedEventData.description}
      />
    )
  }

  modalHandler(data) {
    this.setState({ selectedEventData: data, isModalOpen: !this.state.isModalOpen })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.isModalOpen}
          onRequestClose={() => this.setState({ isModalOpen: false })} animationType={"slide"}
          transparent={false}>
          {this._renderModal()}
        </Modal>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={this.calendarFunction.bind(this)} >
            <Text style={styles.text}>{monthNames[this.state.selectedMonth]} {this.state.selectedYear}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.datePanel}>
            <FlatList
              extraData={this.state}
              data={this.state.dateData}
              ref={(ref) => { this._dateFlatList = ref }}
              onScrollToIndexFailed={() => { }}
              initialNumToRender={10}
              initialScrollIndex={(this.todayDate.getDate() - 1)}
              getItemLayout={(data, index) => ({ length: 60, offset: 60 * index, index })}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.dateObject, (this.state.selectedDateIndex === (item.key - 1)) && { backgroundColor: "#02b7da" }]}
                  onPress={() => this.handleDateIndexChange((item.key - 1))} >
                  <Text style={[styles.text, { textAlign: 'center' }]}>{item.key}{'\n'}{item.day}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.agendaPanel}>
            <Timeline
              circleSize={20}
              circleColor='rgb(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{ minWidth: 52 }}
              timeStyle={{ textAlign: 'center', color: 'white', padding: 5 }}
              onEventPress={this.modalHandler.bind(this)}
              detailContainerStyle={{ marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10 }}
              options={{
                style: { paddingTop: 25 },
                overScrollMode: 'always',
                extraData: this.state,
                enableEmptySections: true
              }}
              data={this.state.eventData}
            />
          </View>
        </View>
      </View>
    )
  }
}
var { height, width } = Dimensions.get('window');
height = height - 55;
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  headerBar: {
    height: height / 13,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#425986",
  },
  contentContainer: {
    height: height * (12 / 13),
    flexDirection: "row",
  },
  dateObject: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 60,
  },
  datePanel: {
    flex: 1,
    elevation: 3,
    backgroundColor: "#384c72",
  },
  agendaPanel: {
    flex: 5,
    backgroundColor: "#4c577c",
  },
  agendaScrollView: {

  },
  text: {
    color: "white"
  },
});

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const UserSlice = createSlice({
  name: 'user',

  // state

  initialState: {
    loading: 'idle',
    moodQuestions: [],
    questions: []
  },
  reducers: {
    // actions that modify the state

    loading (state) {
      if (state.loading === 'idle') state.loading = 'pending'
    },
    loadMoodQuestions (state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.moodQuestions = action.payload
      }
    },
    loadQuestions (state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.questions = action.payload
      }
    }
  }
})

const { actions, reducer } = UserSlice

export const { loading, loadMoodQuestions, loadQuestions } = actions

export const loadMoods = () => async dispatch => {
  // start charging
  dispatch(loading())

  // get API data
  const response = await axios.get('api/questions/type/1')

  // send API data
  dispatch(loadQuestions(response.data.result ? response.data.entities : []))
}

export const loadAllQuestions = () => async dispatch => {
  // start charging
  dispatch(loading())

  // get API data
  const response = await axios.get('api/questions/')

  // send API data
  dispatch(
    loadQuestions(
      response.data.result
        ? response.data.entities.filter(
            question => question.idQuestionType !== 1
          )
        : []
    )
  )
}

export default reducer

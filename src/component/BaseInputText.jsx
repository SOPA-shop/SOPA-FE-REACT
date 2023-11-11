import TextField from '@mui/material/TextField'
import { styled } from '@mui/system'
import { useField } from 'formik'

const InputField = styled(TextField)({
  '& .MuiInputBase-root': {
    fontSize: '16px',
    borderRadius: '16px',
    fontFamily: 'Rubik',
    '& .MuiInputBase-input': {
      padding: '17px 20px',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '16px',
    fontFamily: 'Rubik',
  },
})

const BaseInputText = ({ ...props }) => {
  const [field, error] = useField(props)

  console.log('meta.error', error)
  return (
    <InputField
      {...field}
      {...props}
      error={error.error && error.touched}
      sx={{
        '& .MuiOutlinedInput-root': {
          color: error.value && !error.error && '#3184FF',
          '& fieldset': {
            borderWidth: '1px',
            borderColor: error.value && !error.error ? '#3184FF' : '#E3E5ED',
          },
          '&:hover fieldset': {
            // borderColor: '#3184FF', // màu khi hover --- tạm thời để sau có thể sử dụng
          },
        },
        '& .MuiInputLabel-root': {
          color: error.value && !error.error && '#3184FF',
        },
      }}
    />
  )
}

export default BaseInputText

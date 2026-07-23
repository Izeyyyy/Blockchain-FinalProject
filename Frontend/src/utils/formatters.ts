export const formatDisplayDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

export const getGreetingByTime = () => {
  const hours = new Date().getHours()

  if (hours < 12) {
    return 'Good Morning,'
  }

  if (hours < 18) {
    return 'Good Afternoon,'
  }

  return 'Good Evening,'
}

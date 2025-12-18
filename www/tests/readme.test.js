
jest.setTimeout(30000)

describe('README', () => {
  it('should not have any broken links', async () => {
    expect.assertions(1)
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' })
    const selector = 'a'
    const links = await page.$$eval(selector, as => as.map(a => a.href))
    const workingLinks = (await Promise.all(links.map(async (link) => {
      const newPage = await browser.newPage()
      let isWorking = true
      try {
        const response = await newPage.goto(link, { waitUntil: 'networkidle0' })
        if (response.status() >= 400) {
          isWorking = false
        }
      } catch (e) {
        isWorking = false
      }
      await newPage.close()
      return isWorking
    }))).every(isWorking => isWorking)
    expect(workingLinks).toBe(true)
  })
})

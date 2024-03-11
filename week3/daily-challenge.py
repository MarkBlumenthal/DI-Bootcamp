class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items or []
        self.pageSize = int(pageSize)
        self.totalPages = -(-(len(self.items)) // self.pageSize)
        self.currentPage = 1
    
    def getVisibleItems(self):
        start_index = (self.currentPage - 1) * self.pageSize
        end_index = min(start_index + self.pageSize, len(self.items))
        return self.items[start_index:end_index]
    
    def prevPage(self):
        self.currentPage = max(1, self.currentPage - 1)
        return self
    
    def nextPage(self):
        self.currentPage = min(self.totalPages, self.currentPage + 1)
        return self
    
    def firstPage(self):
        self.currentPage = 1
        return self
    
    def lastPage(self):
        self.currentPage = self.totalPages
        return self
    
    def goToPage(self, pageNum):
        pageNum = int(pageNum)
        self.currentPage = max(1, min(self.totalPages, pageNum))
        return self

# Example usage
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # Output: ["a", "b", "c", "d"]

p.nextPage().nextPage()
print(p.getVisibleItems())  # Output: ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # Output: ["y", "z"]

p.goToPage(10)
print(p.currentPage)  # Output: 5

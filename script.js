
  // Step 1: Create an array of people's names
  const myArray = ['Alice', 'Bob', 'Charlie', 'Diana'];

  // Step 2: Select page elements as JavaScript objects
  const messageDiv = document.getElementById('message');
  const addFriendInput = document.getElementById('addFriend');
  const addNewButton = document.getElementById('addNew');
  const outputTable = document.getElementById('output');

  // Step 3: Add event listener to the Add Friend button
  addNewButton.addEventListener('click', function() {
    const newFriend = addFriendInput.value.trim();
    if (newFriend) {
      myArray.push(newFriend);
      addFriendInput.value = ''; // Clear the input field
      buildContent(); // Rebuild the content with the new friend
    }
  });

  // Step 4: Function to build the content on the page
  function buildContent() {
    outputTable.innerHTML = ''; // Clear existing content
    
    myArray.forEach((person, index) => {
      createRow(person, index);
    });
  }

  // Step 5: Main function to create page elements
  function createRow(person, index) {
    // Create table row and cells
    const row = document.createElement('tr');
    const indexCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const votesCell = document.createElement('td');
    
    // Set content for cells
    indexCell.textContent = index + 1;
    nameCell.textContent = person;
    votesCell.textContent = 0; // Default vote count
    
    // Step 6: Append cells to row and row to table
    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(votesCell);
    outputTable.appendChild(row);
    
    // Step 7: Add click event listener to increase vote counter
    row.addEventListener('click', function() {
      // Step 8: Get current vote count and increment
      let currentVotes = parseInt(votesCell.textContent);
      currentVotes++;
      
      // Step 9: Update the vote count display
      votesCell.textContent = currentVotes;
    });
  }

  // Initial build of the content when page loads
  buildContent();

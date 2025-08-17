// Member ID Generator Utility
// Starts from 110001 and increments by 1 for each new member

class MemberIdGenerator {
  private static currentId = 110001;
  private static readonly STORAGE_KEY = 'trust_member_counter';

  // Initialize the counter from localStorage or start from 110001
  static initialize() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      const storedId = parseInt(stored, 10);
      // If stored ID is less than 110001, reset to 110001
      if (storedId < 110001) {
        this.currentId = 110001;
        this.saveCurrentId();
      } else {
        this.currentId = storedId;
      }
    } else {
      this.currentId = 110001;
      this.saveCurrentId();
    }
  }

  // Generate next member ID
  static generateNextId(): string {
    this.currentId++;
    const nextId = this.currentId.toString();
    this.saveCurrentId();
    return nextId;
  }

  // Get current ID without incrementing
  static getCurrentId(): number {
    return this.currentId;
  }

  // Reset counter to 110001
  static reset(): void {
    this.currentId = 110001;
    this.saveCurrentId();
  }

  // Set counter to a specific value
  static setCurrentId(id: number): void {
    this.currentId = id;
    this.saveCurrentId();
  }

  // Save current ID to localStorage
  private static saveCurrentId(): void {
    localStorage.setItem(this.STORAGE_KEY, this.currentId.toString());
  }

  // Get all existing member IDs from Excel data (if available)
  static async getExistingIds(): Promise<string[]> {
    try {
      // This would typically fetch from your backend/Excel file
      // For now, we'll return an empty array
      return [];
    } catch (error) {
      console.error('Error fetching existing IDs:', error);
      return [];
    }
  }

  // Ensure next ID doesn't conflict with existing ones
  static async generateUniqueId(): Promise<string> {
    const existingIds = await this.getExistingIds();
    let nextId = this.generateNextId();
    
    // Keep generating until we find a unique ID
    while (existingIds.includes(nextId)) {
      nextId = this.generateNextId();
    }
    
    return nextId;
  }
}

// Initialize the generator when the module is loaded
MemberIdGenerator.initialize();

// Set counter to 110000 so first generated ID will be 110001
MemberIdGenerator.setCurrentId(110000);

export default MemberIdGenerator;

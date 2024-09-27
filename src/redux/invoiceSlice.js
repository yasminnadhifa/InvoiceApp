import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../connection";


export const submitInvoice = createAsyncThunk(
  "invoice/submitInvoice",
  async (invoiceData, { rejectWithValue }) => {
    try {
      const response = await api.post("/invoices", invoiceData); // Ubah URL sesuai endpoint API
      return response.data; // Return data jika sukses
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error jika gagal
    }
  }
);

export const getInvoices = createAsyncThunk(
    "invoice/getInvoices",
    async ({ page, limit }, { rejectWithValue }) => {
      try {
        const response = await api.get(`/invoices?page=${page}&limit=${limit}`);
        return response.data; // Return data if successful
      } catch (error) {
        return rejectWithValue(error.response.data); // Return error if failed
      }
    }
  );
// New async thunk for fetching revenue projections
export const getRevenueProjection = createAsyncThunk(
    "invoice/getRevenueProjection",
    async (timeUnit, { rejectWithValue }) => {
      try {
        const response = await api.get(`/graph?timeUnit=${timeUnit}`); // Update URL to match your API endpoint
        return response.data; // Return data if successful
      } catch (error) {
        return rejectWithValue(error.response.data); // Return error if failed
      }
    }
  );
const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    status: "idle", 
    error: null,
  },
  reducers: {
    resetInvoices: (state) => {
      state.invoices = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitInvoice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitInvoice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoices.push(action.payload); // Push invoice yang berhasil ke state
      })
      .addCase(submitInvoice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Simpan pesan error jika ada
      })
      .addCase(getInvoices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInvoices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoices = action.payload.invoices; // Update with the invoices array
            state.totalCount = action.payload.totalCount; // Update total count
            state.totalPages = action.payload.totalPages; // Update total pages
            state.currentPage = action.payload.currentPage;
      })
      .addCase(getInvoices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Store error message if any
      })
      .addCase(getRevenueProjection.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.revenue = action.payload; // Update with the revenue data
      })

  },
});

export default invoiceSlice.reducer;
